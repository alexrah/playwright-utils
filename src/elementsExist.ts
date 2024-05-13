import {expect, Page} from "@playwright/test";
import logger from "@alexrah/logger";
import type {tCommonSelectors, tSelector} from "./playwrightTypes";

async function headerFooterExist(page:Page,lg:logger){

    const commonTestIds:tCommonSelectors = {
        header: 'header-link-logo',
        footer: 'footer-partnership'
    }

    lg.i('check if header exists');

    await expect(page.getByTestId(commonTestIds.header)).toBeVisible();

    lg.i('check if footer exists');
    await expect(page.getByTestId(commonTestIds.footer)).toBeVisible();

}

async function contentExists(testUrlSelectors:tSelector[] , page:Page, lg:logger){

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element has content: ',contentSelector.selector);

        const locationOptions = (typeof contentSelector.hasText === 'undefined')?{}:{hasText: contentSelector.hasText }

        const countElement = await page.locator(contentSelector.selector,locationOptions).count();
        expect(countElement).toBeGreaterThan(0);

    }

}

async function contentIsVisible(testUrlSelectors:tSelector[] , page:Page, lg:logger){

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element has content: ',contentSelector.selector);

        const locationOptions = (typeof contentSelector.hasText === 'undefined')?{}:{hasText: contentSelector.hasText }

        await expect(page.locator(contentSelector.selector,locationOptions)).toBeVisible()
    }

}

async function contentNotExist(testUrlSelectors:tSelector[],page:Page,lg:logger){

    for ( const contentSelector of testUrlSelectors ){

        lg.i('check if element does NOT have content: ',contentSelector.selector);

        await expect(page.locator(contentSelector.selector)).toHaveCount(0);
    }
}

export { headerFooterExist,contentIsVisible,contentNotExist }