import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyDashboardVisible() {
    await expect(this.page.locator('.oxd-topbar-header-breadcrumb')).toContainText('Dashboard');
  }

  async logout() {
    await this.page.locator('.oxd-userdropdown-tab').click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
  }

  async verifyLoggedOut() {
    await expect(this.page.getByPlaceholder('Username')).toBeVisible();
  }
}