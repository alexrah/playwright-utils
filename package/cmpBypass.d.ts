import { type Page } from '@playwright/test';
declare const cmpBypass: (page: Page) => Promise<void>;
export default cmpBypass;
