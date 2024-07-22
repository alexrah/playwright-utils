import 'dotenv/config';
import { Browser } from '@playwright/test';
/**
 * @param browser the browser contect from the current test
 * @param absPathToStorageFile ie: `${__dirname}/../storage/storageState.json`
 * */
declare const wpSessionLoginStorage: (browser: Browser, absPathToStorageFile: string) => Promise<import("@playwright/test").BrowserContext>;
export { wpSessionLoginStorage };
