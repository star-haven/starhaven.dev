import { test } from "@playwright/test";

test("sign in", async ({ page }) => {
    await page.goto("/");
    const signInButton = await page.waitForSelector("text=Sign in");
    await signInButton.click();
    await page.click("text=Sign in with Discord");
    await page.click("text=Authorize");
    await page.waitForSelector("text=Sign out");
});
