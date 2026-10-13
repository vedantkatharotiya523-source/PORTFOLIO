import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const auditRoutes = [
  "/",
  "/about",
  "/projects",
  "/services",
  "/skills",
  "/experience",
  "/ai-lab",
  "/insights",
  "/contact",
];

test.describe("Accessibility (axe-core) Audits", () => {
  for (const route of auditRoutes) {
    test(`Zero critical/serious a11y violations on ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .disableRules(["color-contrast"]) // Avoid false positives from browser-level antialiasing
        .analyze();

      const seriousViolations = accessibilityScanResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );

      expect(
        seriousViolations,
        `Violations found on ${route}: ${JSON.stringify(seriousViolations, null, 2)}`
      ).toEqual([]);
    });
  }
});
