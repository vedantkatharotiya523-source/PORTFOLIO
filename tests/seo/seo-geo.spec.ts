import { test, expect } from "@playwright/test";
import { geoData } from "../../src/data/geo";
import { profileData } from "../../src/data/profile";

test.describe("GEO & AEO Verification", () => {
  test("llms.txt and llms-full.txt exist and contain canonical positioning sentence", async ({ request }) => {
    const resShort = await request.get("/llms.txt");
    expect(resShort.status()).toBe(200);
    const textShort = await resShort.text();
    expect(textShort).toContain(geoData.positioningSentence);

    const resFull = await request.get("/llms-full.txt");
    expect(resFull.status()).toBe(200);
    const textFull = await resFull.text();
    expect(textFull).toContain(geoData.positioningSentence);
  });

  test("robots.txt explicitly allows AI crawlers", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const content = await res.text();
    const expectedBots = [
      "GPTBot",
      "ClaudeBot",
      "PerplexityBot",
      "Google-Extended",
      "Applebot-Extended",
      "CCBot",
    ];
    for (const bot of expectedBots) {
      expect(content).toContain(bot);
    }
  });

  test("Home page contains canonical positioning sentence and Facts at a Glance", async ({ page }) => {
    await page.goto("/");
    const bodyText = await page.textContent("body");
    expect(bodyText).toContain(geoData.positioningSentence);
    expect(bodyText).toContain("Developer Profile at a Glance");
  });

  test("Key pages have single h1 and answer-first blocks", async ({ page }) => {
    const routes = [
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

    for (const route of routes) {
      await page.goto(route);
      const h1Count = await page.locator("h1").count();
      expect(h1Count, `Expected exactly 1 h1 on ${route}`).toBe(1);

      // Check for presence of answer first text
      const content = await page.textContent("body");
      expect(content).toContain("Direct Answer");
    }
  });

  test("Person and ProfessionalService JSON-LD are injected in root layout", async ({ page }) => {
    await page.goto("/");
    await page.locator('script[type="application/ld+json"]').first().waitFor({ state: "attached" });
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    const joined = jsonLdScripts.join(" ");

    expect(joined).toContain("Person");
    expect(joined).toContain("ProfessionalService");
    expect(joined).toContain(profileData.name);
  });
});
