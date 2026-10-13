import { test } from "@playwright/test";
import fs from "fs";
import path from "path";

const screenshotRoutes = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "project-detail", path: "/projects/ai-powered-ats-twilio-calling" },
  { name: "services", path: "/services" },
  { name: "skills", path: "/skills" },
  { name: "experience", path: "/experience" },
  { name: "ai-lab", path: "/ai-lab" },
  { name: "insights", path: "/insights" },
  { name: "insight-detail", path: "/insights/how-ai-voice-calling-works-inside-an-ats" },
  { name: "contact", path: "/contact" },
];

test.describe("Full-Page Visual Inspection Capture", () => {
  test.beforeAll(() => {
    const dir = path.join(process.cwd(), "tests", "screenshots");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  for (const item of screenshotRoutes) {
    test(`Capture screenshot for ${item.name}`, async ({ page }) => {
      const width = page.viewportSize()?.width || 1280;
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(item.path);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(300);

      const screenshotPath = path.join(
        process.cwd(),
        "tests",
        "screenshots",
        `${item.name}-${width}.png`
      );

      await page.screenshot({ path: screenshotPath, fullPage: true });
    });
  }
});
