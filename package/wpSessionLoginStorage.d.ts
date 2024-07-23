import 'dotenv/config';
import { Browser } from '@playwright/test';
type tWpSessionLoginStorageProps = {
    browser: Browser;
    absPathToStorageFile: string;
    checkIfSuccessfull?: boolean;
};
/**
 * @param browser the browser contect from the current test
 * @param absPathToStorageFile ie: `${__dirname}/../storage/storageState.json`
 * @param checkIfSuccessfull toggle check about redirect to wp-admin after log-in (if logging as community user, no access to wp-admin); default: false
 * */
declare const wpSessionLoginStorage: ({ browser, absPathToStorageFile, checkIfSuccessfull }: tWpSessionLoginStorageProps) => Promise<import("@playwright/test").BrowserContext>;
export { wpSessionLoginStorage };
