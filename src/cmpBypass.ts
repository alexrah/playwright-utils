import logger from "@alexrah/logger";
import { type Page } from '@playwright/test';


/**
 * edit .env file adding DEBUG=pw:tests to enable Logger
 * */
const lg = new logger('CmpBypass');

const cmpBypass = async (page:Page) => {

    lg.i('click on CMP');
    await page.locator('.qc-cmp2-summary-buttons button span',{hasText: 'ACCETTO'}).click();

    /**
     * Alternative selector
     **/
    // await page.getByRole('button', { name: 'ACCETTO' }).click();

}

export default cmpBypass;