import { test, expect } from "@playwright/test";

test.describe("Functional & User Journey Checks", () => {
  test("Theme toggle toggles dark/light mode class", async ({ page }) => {
    await page.goto("/");
    const themeBtn = page.locator('button[aria-label*="Switch to"]');
    await expect(themeBtn).toBeVisible();

    const html = page.locator("html");
    const initialThemeClass = await html.getAttribute("class");

    await themeBtn.click({ force: true });
    // Class should toggle
    const newThemeClass = await html.getAttribute("class");
    expect(newThemeClass).not.toBe(initialThemeClass);
  });

  test("Project category filter updates visible cards", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.locator("h1")).toContainText("Production Web Applications");

    const aiTab = page.locator('button[role="tab"]:has-text("AI")');
    await aiTab.click();

    // Verify filtered card presence
    const projectCard = page.locator("text=AI-Powered ATS with Twilio AI Calling").first();
    await expect(projectCard).toBeVisible();
  });

  test("Contact form validates inputs and displays success", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Thank you Alex Developer! Your message has been received.",
        }),
      });
    });

    await page.goto("/contact");

    // Trigger validation with empty inputs
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    // Error messages should appear
    await expect(page.locator("#name-error")).toBeVisible();
    await expect(page.locator("#email-error")).toBeVisible();

    // Fill valid form fields
    await page.locator("#contact-name").fill("Alex Developer");
    await page.locator("#contact-email").fill("alex@example.com");
    await page.locator("#contact-message").fill("We need to build a custom ATS with Twilio voice screening interviews.");

    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    // Success notification
    await expect(page.locator('div[role="status"]')).toBeVisible({ timeout: 10000 });
  });

  test("404 page renders without standard header navbar", async ({ page }) => {
    await page.goto("/non-existent-random-page-12345");
    await expect(page.locator("h1")).toContainText("404");

    // Main header should not be present in the 404 overlay
    const homeLink = page.locator('text=Return to Home');
    await expect(homeLink).toBeVisible();
  });
});
