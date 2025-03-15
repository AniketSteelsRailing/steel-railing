// generate-sitemap.ts
import fs from 'fs';
import path from 'path';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

const urls = [
  `${baseUrl}`,
  `${baseUrl}/imagemodel/gate`,
  `${baseUrl}/imagemodel/railing`,
  `${baseUrl}/imagemodel/window`,
  `${baseUrl}/aboutus`,
  `${baseUrl}/contact-us`,
  `${baseUrl}/service-form`,
  `${baseUrl}/railingproject`,
  `${baseUrl}/ourservices`,
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
      <url>
        <loc>${url}</loc>
      </url>`
        )
        .join('')}
    </urlset>`;

  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  // Ensure the public folder exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // Write sitemap.xml file to public folder
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated at /public/sitemap.xml');
};

// Call the function to generate sitemap
generateSitemap();
