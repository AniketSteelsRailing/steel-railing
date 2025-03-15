This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- Package Used for Social Media Accounts in footer component
npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';

Package Used for Animation on about us component
npm install animate.css --save
import 'animate.css'; 

Package Used for conditional class attribute in header component
npm install clsx
import clsx from "clsx"; // Import clsx for conditional class names
-->

# Install dependencies
npm install @prisma/client
npm install prisma --save-dev

# Initialize Prisma
npx prisma init

# Run migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Start Next.js app
npm run dev


<!-- export const getServiceData = async (serviceName: string) => {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search?query=${serviceName}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
        },
      }
    );
    
    return response.json();
  } catch (error) {
  console.log("testdata error", error);
    console.error(error);
  }
}; -->


<!-- import { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return[
        { url:`${baseUrl}` },
        { url:`${baseUrl}/imagemodel/gate` },
        { url:`${baseUrl}/imagemodel/railing` },
        { url:`${baseUrl}/imagemodel/window` },
        { url:`${baseUrl}/aboutus` },
        { url:`${baseUrl}/contact-us` },
        { url:`${baseUrl}/service-form` },
        { url:`${baseUrl}/railingproject` },
        { url:`${baseUrl}/ourservices` },
    ]
} -->
