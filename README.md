# Valma Web App Next.js Template
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Config App
Create a file named `.env.local` in the current directory and copy the contents from `.env.example`. Setting the following content:
```
# APP ID (ID of the app created in the studio of the Valma app, can be found in the URL when viewing the app. Example: https://app.valma.ai/app/b42b8d94-d239-41cb-89d3-c9473153d6a4/develop)
# The ID is then b42b8d94-d239-41cb-89d3-c9473153d6a4
NEXT_PUBLIC_APP_ID=
# APP API key (API key created in the "API-access" panel in the studio of the Valma app)
NEXT_PUBLIC_APP_KEY=
# API url prefix (URL for API calls to Valma AI)
NEXT_PUBLIC_API_URL=https://api.app.valma.ai/v1
```

Config more in `config/index.ts` file:   
```js
export const APP_INFO: AppInfo = {
  title: 'Valma AI chat',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'nb_NO'
}

export const isShowPrompt = true
export const promptTemplate = ''
```

## Getting Started
First, install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Docker

```
docker build . -t andremik90/valma-webapp:latest
# now you can access it in port 3000
docker run -p 3000:3000 andremik90/valma-webapp:latest
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

> ⚠️ If you are using [Vercel Hobby](https://vercel.com/pricing), your message will be trucated due to the limitation of vercel.


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
