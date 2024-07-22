import 'dotenv/config';
import {Browser, chromium } from '@playwright/test';
import logger from "@alexrah/logger";
import * as fs from "fs";

/**
 * @param browser the browser contect from the current test
 * @param absPathToStorageFile ie: `${__dirname}/../storage/storageState.json`
 * */
const wpSessionLoginStorage = async (browser:Browser,absPathToStorageFile:string) => {

    const lg = new logger('backendLoginStorage');

    // const sStorageFilePath = `${__dirname}/../storage/storageState.json`

    lg.i('check if storageState.json exists');
    if(fs.existsSync(absPathToStorageFile)){
        lg.i('storageState.json exists');
        return await browser.newContext({storageState: absPathToStorageFile})
    }

    lg.i('storageState.json not exists, creating');
    const browserLogin = await chromium.launch();
    const pageLogin = await browserLogin.newPage();


    lg.i('emulate login via wp-login.php');
    // @ts-ignore
    await pageLogin.goto('/wp-login.php');
    await pageLogin.fill('input#user_login', process.env.USERNAME);
    await pageLogin.fill('input#user_pass', process.env.PASSWORD);
    await pageLogin.getByRole('button', { name: /Accedi|Login/ }).click()

    lg.i('check if logging is successful');
    await pageLogin.waitForSelector('#adminmenuwrap');

    lg.i('save login data to fixtures/storageState.json');
    await pageLogin.context().storageState({ path: absPathToStorageFile });

    await pageLogin.close();
    await browserLogin.close();

    return await browser.newContext({storageState: absPathToStorageFile})


}

export { wpSessionLoginStorage }