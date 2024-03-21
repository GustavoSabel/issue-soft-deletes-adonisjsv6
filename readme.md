# Issue Demonstration - AdonisJS V6 with Soft Deletes

This project was created to highlight an issue occurring in AdonisJS V6 with the [adonis-lucid-soft-deletes](https://github.com/lookinlab/adonis-lucid-soft-deletes) 2.0.0.

In `PostsController`, within the `store` function, you can observe that `useTransaction(trx)` returns `any` instead of `Post`. As a result, the `post` constant is assigned the type `any` rather than `Post`.

## How to Execute

```bash
npm install
node ace migration:run
node ace db:seed
npm run dev
```
