import { Browser, } from 'puppeteer';
import nunjucks from 'nunjucks';
import moment from 'moment';

// Classes
import { Job } from "./job.class";
import { JobParams } from './job.interfaces';

// Services
import puppeteerService from '../../services/puppeteer';
import { Page } from 'puppeteer';

// Storage
import { JsonFile } from '../../storage/json-file';

export class WebScraperJob extends Job {
  browser!: Browser;
  page!: Page;

  constructor(data: JobParams) {
    super(data);
  }

  async beforeExecution() {
    this.browser = await puppeteerService.startBrowser();
    this.page = await this.browser.newPage();
    await this.page.goto(this.options.task.url);
  }

  async execution() {
    for await (const action of this.options.task.actions) {
      const text = await puppeteerService.actionTypes[action.type](this.page, action.selector);
      this.setState(action.variable, text);
    }
  }

  async afterExecution() {
    this.setState('timestamp', moment().format());

    const content = this.result();
    this.store();
    await this.browser.close();
  }

  /**
   * renders a template with the captured data from the job
   * @returns string content to send to a chat/msg/email app
   */
  result(): string {
    return nunjucks.renderString(this.options.task.template, this.state);
  }

  /**
   * Sends result to another service (email, api, chat, ...)
   */
  send() {
    if (this.options.task.sender.enabled) {
      const content = this.result();
      console.log(content);
    }
  }

  /**
   * Store result in file or db
   */
  store() {
    if (this.options.task.storage.enabled) {
      const json = new JsonFile(this.options.task.storage.filename);
      json.push(this.state);
      json.save();
    }
  }
}