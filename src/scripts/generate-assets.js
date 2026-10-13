const fs = require("fs");
const path = require("path");

const slugs = [
  "ai-powered-ats-twilio-calling",
  "multi-tenant-crm",
  "smart-campaign-email-studio",
  "ecommerce-platform",
  "ecommerce-scrapers-price-intelligence",
  "ai-rag-assistant-business",
  "custom-web-applications",
];

// Minimal 1x1 transparent WebP binary buffer
const minimalWebpBuffer = Buffer.from([
  0x52, 0x49, 0x46, 0x46, 0x1a, 0x00, 0x00, 0x00, 0x57, 0x45, 0x42, 0x50,
  0x56, 0x50, 0x38, 0x4c, 0x0e, 0x00, 0x00, 0x00, 0x2f, 0x00, 0x00, 0x00,
  0x10, 0x07, 0x10, 0x11, 0x11, 0x88, 0x88, 0xfe, 0x07, 0x00
]);

const publicDir = path.join(__dirname, "..", "..", "public");

slugs.forEach((slug) => {
  const targetDir = path.join(publicDir, "projects", slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  ["cover.webp", "1.webp", "2.webp"].forEach((file) => {
    const filePath = path.join(targetDir, file);
    fs.writeFileSync(filePath, minimalWebpBuffer);
  });
});

// Create minimal valid PDF for resume.pdf
const minimalPdfBuffer = Buffer.from(
  "%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000009 00000 n\n0000000052 00000 n\n0000000101 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n"
);
fs.writeFileSync(path.join(publicDir, "resume.pdf"), minimalPdfBuffer);

console.log("All project placeholder assets and resume.pdf generated successfully.");
