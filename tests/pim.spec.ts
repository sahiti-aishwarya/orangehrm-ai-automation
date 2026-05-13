import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { logStep } from '../utils/helpers';
import { generateAIEmployeeData } from '../utils/aiTestDataGenerator';

test('add employee in PIM module', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PIMPage(page);

  const employee = generateAIEmployeeData();
const firstName = employee.firstName;
const middleName = employee.middleName;
const lastName = employee.lastName;


  logStep('Open login page');
  await loginPage.gotoLoginPage();

  logStep('Login with valid credentials');
  await loginPage.login('Admin', 'admin123');

  logStep('Go to PIM module');
  await pimPage.goToPIM();

  logStep('Click Add Employee');
  await pimPage.clickAddEmployee();

  logStep('Enter employee details');
  await pimPage.addEmployee(firstName, middleName, lastName);

  logStep('Verify employee added');
  await pimPage.verifyEmployeeAdded(firstName, lastName);
logStep('Go to Employee List');
await pimPage.goToEmployeeList();

logStep('Search employee by first name');
await pimPage.searchEmployee(firstName);

logStep('Verify employee appears in search results');
await pimPage.verifyEmployeeInSearchResults(firstName, lastName);
});