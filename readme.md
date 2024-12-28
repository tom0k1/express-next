```bash
$ npm run migrate
$ cd apps/backend
$ ../../node_modules/.bin/knex seed:run --specific=users.ts
$ ../../node_modules/.bin/knex seed:run --specific=tasks.ts
```
