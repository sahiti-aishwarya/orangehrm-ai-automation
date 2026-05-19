import { test, expect } from '@playwright/test';

test.describe('API Testing with Playwright', () => {
  test('GET users API validation', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const users = await response.json();

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
  });

  test('POST create user API validation', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'AI Test User',
        username: 'aitestuser',
        email: 'aitestuser@example.com',
      },
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe('AI Test User');
    expect(responseBody.username).toBe('aitestuser');
    expect(responseBody.email).toBe('aitestuser@example.com');
  });
});