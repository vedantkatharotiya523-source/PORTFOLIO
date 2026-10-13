import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/ai-powered-ats-twilio-calling",
  "/services",
  "/skills",
  "/experience",
  "/ai-lab",
  "/insights",
  "/insights/how-ai-voice-calling-works-inside-an-ats",
  "/contact",
];

test.describe("Responsive Viewport & No-Overflow Checks", () => {
  for (const route of routes) {
    test(`No horizontal scroll on ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      const hasHorizontalScroll = await page.evaluate(() => {
        const scrollingElem = document.scrollingElement || document.documentElement;
        return scrollingElem.scrollWidth > window.innerWidth;
      });

      expect(
        hasHorizontalScroll,
        `Page ${route} should not have horizontal overflow (scrollWidth <= innerWidth)`
      ).toBe(false);
    });
  }
});
