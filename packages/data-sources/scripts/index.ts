import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';

const DB_PATH = path.join(__dirname, '../world-factbook');
type json =
    | string
    | number
    | boolean
    | json[]
    | {[key: string ]: json}


const foldersToIgnore = ['meta'];
const getFolders = async () => {
  const folders = (await fs.readdir(DB_PATH)).filter((f) => !f.includes('.') && !foldersToIgnore.includes(f));
  return folders.map((f) => ({
    absolutePath: path.join(DB_PATH, f),
    relativePath: f,
  }));
};

const flattenTextKeyInObject = (obj: Record<string, json> | json) => {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj;
    }
    return Object.keys(obj).reduce((acc, key) => {

        if (typeof obj[key] === 'object') {
          if (obj[key]['text']) {
            return { ...acc, [key]: obj[key]['text'] };
          }
          return {...acc, [key]: flattenTextKeyInObject(obj[key])}
        }
        return acc;
    }, {});
}
const main = async () => {
  const folders = await getFolders();
  const files = await Promise.all(
    folders.map(async (f) => {
      return fg(`${f.absolutePath}/*.json`, { onlyFiles: true, absolute: false });
    }));
  folders.forEach((f, i) => {
    console.log(f.relativePath, files[i].length);
    let dataId = f.relativePath;
    files[i].forEach(async (file) => {
      const data = await fs.readFile(file, 'utf-8');
      const json = JSON.parse(data);
        const flattenedJson = flattenTextKeyInObject(json);
        console.dir(flattenedJson, { depth: null });
    })
  })
};
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
