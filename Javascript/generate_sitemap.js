import SitemapGenerator from 'sitemap-generator';
import fs from 'fs';

// Create a generator
const generator = SitemapGenerator('https://www.bilalhaider.me', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
  maxDepth: 0, // Adjust as necessary to crawl deeper levels
  maxEntriesPerFile: 50000, // Adjust based on your needs
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap created!');
});

// Handle errors
generator.on('error', (error) => {
  console.error('Error generating sitemap:', error);
});

// Start the crawler
generator.start();
