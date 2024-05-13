export type tCommonSelectors = {
    header: string,
    footer: string
}

export interface tSelector {
    selector: string,
    hasText?: string
}

export interface tTestURL {
    name: string,
    url: string,
    existentContentSelectors?: tSelector[],
    notExistentContentSelectors?: Pick<tSelector, 'selector'>[]
}