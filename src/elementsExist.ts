import {expect, Page} from "@playwright/test";
import logger from "@alexrah/logger";
import type {tCommonSelectors, tSelector} from "./playwrightTypes.js";


async function contentExists(testUrlSelectors:tSelector[] , page:Page ){

    const lg = new logger('contentExists')

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element has content: ',contentSelector.selector);

        const locationOptions = (typeof contentSelector.hasText === 'undefined')?{}:{hasText: contentSelector.hasText }

        const countElement = await page.locator(contentSelector.selector,locationOptions).count();
        expect(countElement).toBeGreaterThan(0);

    }

}

async function contentIsVisible(testUrlSelectors:tSelector[] , page:Page ){

    const lg = new logger('contentIsVisible');

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element has content: ',contentSelector.selector);

        const locationOptions = (typeof contentSelector.hasText === 'undefined')?{}:{hasText: contentSelector.hasText }

        await expect(page.locator(contentSelector.selector,locationOptions)).toBeVisible()
    }

}

async function contentNotExist(testUrlSelectors:tSelector[],page:Page){

    const lg = new logger('contentNotExist');

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element does NOT have content: ',contentSelector.selector);

        await expect(page.locator(contentSelector.selector)).toHaveCount(0);
    }
}

export { contentIsVisible,contentExists, contentNotExist }