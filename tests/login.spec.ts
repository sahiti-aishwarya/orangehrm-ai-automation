import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { logStep } from '../utils/helpers';

test.describe('OrangeHRM Login Tests', () => {

  test('valid login and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    logStep('Open login page');
    await loginPage.gotoLoginPage();

    logStep('Login with valid credentials');
    await loginPage.login('Admin', 'admin123');

    logStep('Verify dashboard');
    await dashboardPage.verifyDashboardVisible();

    logStep('Logout');
    await dashboardPage.logout();

    logStep('Verify logout');
    await dashboardPage.verifyLoggedOut();
  });

  test('invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    logStep('Open login page');
    await loginPage.gotoLoginPage();

    logStep('Login with invalid credentials');
    await loginPage.login('Admin', 'wrongpassword');

    logStep('Verify error');
    await loginPage.verifyLoginFailure();
  });

});