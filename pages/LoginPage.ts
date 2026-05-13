import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLoginPage() {
  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    timeout: 60000
  });

  await this.page.waitForLoadState('domcontentloaded');
}

  async login(username: string, password: string) {
  await this.page.getByPlaceholder('Username').fill(username);
  await this.page.getByPlaceholder('Password').fill(password);
  await this.page.getByRole('button', { name: 'Login' }).click();

  await this.page.waitForLoadState('networkidle');
}


  async verifyLoginFailure() {
    await expect(this.page.getByText(/invalid credentials/i)).toBeVisible();
  }
}