# Contact-book
It is simple react app which allows user to view his contacts.

#### How to run the app (on master branch):

1. Install dependencies
```
  npm i
```
2. Run json server
```
  npm run json:server
```
3. Run the app in dev mode
```
  npm run dev
```

<br />

#### Other commands:
Run unit tests
```
npm run test
```
Run unit tests with coverage flag:
```
npm run test:coverage
```
Build app
```
npm run build
```
Kill json server (if it is running in bg mode):
```
sudo lsof -i :3000
kill -9 <PID>
```
