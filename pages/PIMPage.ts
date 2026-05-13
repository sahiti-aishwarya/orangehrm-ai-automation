import { Page, expect } from '@playwright/test';

export class PIMPage {
  constructor(private page: Page) {}

async goToPIM() {
  await this.page.getByRole('link', { name: 'PIM' }).click();
  await expect(this.page.getByText('Employee Information')).toBeVisible({ timeout: 10000 });
}

  async clickAddEmployee() {
  await this.page.getByText('Add Employee').click();
  await expect(this.page.locator('input[name="firstName"]')).toBeVisible({ timeout: 10000 });
}

 async addEmployee(firstName: string, middleName: string, lastName: string) {
  await this.page.locator('input[name="firstName"]').fill(firstName);
  await this.page.locator('input[name="middleName"]').fill(middleName);
  await this.page.locator('input[name="lastName"]').fill(lastName);

  const employeeId = String(Date.now()).slice(-6);
  const employeeIdInput = this.page.locator('.oxd-input').nth(4);

  await employeeIdInput.clear();
  await employeeIdInput.fill(employeeId);

  await this.page.getByRole('button', { name: /save/i }).click();
}

async verifyEmployeeAdded(firstName: string, lastName: string) {
  const fullName = `${firstName} ${lastName}`;
  await expect(
    this.page.getByRole('heading', { name: new RegExp(fullName) })
  ).toBeVisible({ timeout: 15000 });
}
async goToEmployeeList() {
  await this.page.getByText('Employee List').click();
  await expect(this.page.getByText('Employee Information')).toBeVisible({ timeout: 10000 });
}

async searchEmployee(firstName: string) {
  await this.page.getByPlaceholder('Type for hints...').first().fill(firstName);
  await this.page.getByRole('button', { name: /search/i }).click();
}

async verifyEmployeeInSearchResults(firstName: string, lastName: string) {
  await expect(this.page.getByText(firstName).first()).toBeVisible({ timeout: 10000 });
  await expect(this.page.getByText(lastName).first()).toBeVisible({ timeout: 10000 });
}
}