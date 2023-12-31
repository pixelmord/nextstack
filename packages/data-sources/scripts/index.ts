import camelcase from 'camelcase';
import camelcaseKeys from 'camelcase-keys';
import fg from 'fast-glob';
import fs from 'fs/promises';
import MeiliSearch from 'meilisearch';
import path from 'path';
import { sanitize } from 'string-sanitizer';

const DB_PATH = path.join(__dirname, '../world-factbook');
type json = string | number | boolean | json[] | { [key: string]: json };

const foldersToIgnore = ['meta'];
const getFolders = async () => {
  const folders = (await fs.readdir(DB_PATH)).filter((f) => !f.includes('.') && !foldersToIgnore.includes(f));
  return folders.map((f) => ({
    absolutePath: path.join(DB_PATH, f),
    relativePath: f,
  }));
};

const flattenTextKeyInObject = (obj: json) => {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('flattenTextKeyInObject only accepts objects');
  }
  return Object.keys(obj).reduce(
    (acc, key): Record<string, json> => {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const curObj = obj[key] as Record<string, json>;
        const curKey = camelcase(sanitize.keepSpace(key));
        if (curObj['text']) {
          return { ...acc, [curKey]: curObj['text'] };
        }
        return { ...acc, [curKey]: { humanReadableKeyName: key, ...flattenTextKeyInObject(obj[key] as json) } };
      }
      return acc;
    },
    {} as Record<string, json>
  );
};
const main = async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: '7mmiYBn4mRmggZyn9eAq',
  });
  const index = client.index('worldfacts');
  const folders = await getFolders();
  const files = await Promise.all(
    folders.map(async (f) => {
      return fg(`${f.absolutePath}/*.json`, { onlyFiles: true, absolute: false });
    })
  );
  const dataEntries = await Promise.all(
    folders.map((f, i) => {
      const dataId = f.relativePath;
      return Promise.all(
        files[i]!.map(async (file) => {
          const fileId = file.split('/').pop()?.split('.')[0];
          const data = await fs.readFile(file, 'utf-8');
          const json = JSON.parse(data);
          return {
            id: dataId + '--' + fileId,
            url: `/worldfacts/${dataId}/${fileId}`,
            ...flattenTextKeyInObject(json),
          };
        })
      );
    })
  );
  await index.addDocuments(camelcaseKeys(dataEntries.flat(), { deep: true }));
};
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
