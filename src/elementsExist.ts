import {expect, Page} from "@playwright/test";
import logger from "@alexrah/logger";
import type {tCommonSelectors, tSelector} from "./playwrightTypes.js";


export async function contentExists(testUrlSelectors:tSelector[] , page:Page, lg?:logger){

  for ( const contentSelector of testUrlSelectors ){

    lg && lg.i('check if element has content: ',contentSelector.selector);

    const locationOptions = (typeof contentSelector.hasText === 'undefined')?{}:{hasText: contentSelector.hasText }

    const countElement = await page.locator(contentSelector.selector,locationOptions).count();
    expect(countElement).toBeGreaterThan(0);

  }

}

export async function contentIsVisible(testUrlSelectors: tSelector[], page: Page, lg?: logger) {

  for (const contentSelector of testUrlSelectors) {

    lg && lg.i('check if element has content: ', [contentSelector.selector,contentSelector?.hasText]);

    const locationOptions = (typeof contentSelector.hasText === 'undefined') ? {} : {hasText: contentSelector.hasText}

    await expect(page.locator(contentSelector.selector, locationOptions).first()).toBeVisible()
  }

}

export async function contentNotExist(testUrlSelectors: tSelector[], page: Page, lg?: logger) {

  for (const contentSelector of testUrlSelectors) {

    lg && lg.i('check if element does NOT have content: ', contentSelector.selector);

    await expect(page.locator(contentSelector.selector).first()).toHaveCount(0);
  }
}
