## Playwright utilities
All utilities listed here are meant to be used inside a playwright's `test()` function.


### cmpBypass
clicks "Accept" on InMobi (formerly Quantcast) CMP overlay

```typescript
// inside a playwright test()
await cmpBypass(page);
```

### contentIsVisible
check if passed selector match any visible element
```typescript
// inside a playwright test()
await contentIsVisible(testUrl.existentContentSelectors,page)
```

### contentExists
check if passed selector match any existing element

```typescript
// inside a playwright test()
await contentExists(testUrl.existentContentSelectors,page)
```

### contentNotExist
check if passed selector match any not existing element

```typescript
// inside a playwright test()
await contentNotExist(testUrl.notExistentContentSelectors,page);
```

### wpSessionLoginStorage
- login to a wordpress backend with creds provided in .env file USERNAME & PASSWORD
- save authenticated session in *.json file to allow reuse in multiple tests
```typescript
await wpSessionLoginStorage(browser,'/path/to/stored/creds.json')
```