import { Page } from "@playwright/test";
import type { tSelector } from "./playwrightTypes";
declare function contentExists(testUrlSelectors: tSelector[], page: Page): Promise<void>;
declare function contentIsVisible(testUrlSelectors: tSelector[], page: Page): Promise<void>;
declare function contentNotExist(testUrlSelectors: tSelector[], page: Page): Promise<void>;
export { contentIsVisible, contentExists, contentNotExist };
