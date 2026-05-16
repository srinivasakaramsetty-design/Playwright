import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async openURL() {

    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await this.page.waitForSelector(
      'input[name="username"]'
    );
  }

  async enterUsername(username: string) {

    await this.page.fill(
      'input[name="username"]',
      username
    );
  }

  async enterPassword(password: string) {

    await this.page.fill(
      'input[name="password"]',
      password
    );
  }

  async clickLogin() {

    await this.page.click(
      'button[type="submit"]'
    );
  }

  async login(username: string, password: string) {

    await this.enterUsername(username);

    await this.enterPassword(password);

    await this.clickLogin();
  }
}