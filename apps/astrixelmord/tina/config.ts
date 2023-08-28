import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: 'b45dc966-a327-4557-9d64-ec72e896f145', // Get this from tina.io
  token: 'e335f4e52138a983b2846e7d10471f4809d48fc5', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Posts',
        path: 'src/content/blog',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publish Date',
            required: true,
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
