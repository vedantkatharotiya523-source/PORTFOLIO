import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000",
    defaultBrowserType: "chromium",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 }, defaultBrowserType: "chromium" },
    },
    {
      name: "Desktop 1920",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 }, defaultBrowserType: "chromium" },
    },
    {
      name: "Laptop 1366",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1366, height: 768 }, defaultBrowserType: "chromium" },
    },
    {
      name: "iPad Portrait",
      use: { ...devices["iPad (gen 7)"], defaultBrowserType: "chromium" },
    },
    {
      name: "iPad Landscape",
      use: { ...devices["iPad (gen 7) landscape"], defaultBrowserType: "chromium" },
    },
    {
      name: "iPhone 14",
      use: { ...devices["iPhone 14"], defaultBrowserType: "chromium" },
    },
    {
      name: "iPhone SE (375)",
      use: { ...devices["iPhone SE"], defaultBrowserType: "chromium" },
    },
    {
      name: "Small Phone (320)",
      use: { viewport: { width: 320, height: 568 }, defaultBrowserType: "chromium" },
    },
    {
      name: "Pixel 7",
      use: { ...devices["Pixel 7"], defaultBrowserType: "chromium" },
    },
  ],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
