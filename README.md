# Testing JavaScript code using Jest


Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests.

Jest ships as an NPM package, you can install it in any JavaScript project. Jest is one of the most popular test runner these days, and the default choice for React projects.


- Run command 'npm init -y' to create the package file
```sh
npm init -y
```

- Install jest as dev dependency 'npm i --save-dev jest'
```sh
npm i --save-dev jest
```


- In package.json file update the script tag as below
 "scripts": {
    "test": "jest"
  }
  ```sh
  {
  "name": "Jest",
  "version": "1.0.0",
  "description": "",
  "main": "cloneArray.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```
```
- Run 'npm test' command to execute test cases
```sh
npm test
```
PASS  ./subtract.test.js
PASS  ./cloneArray.test.js
PASS  ./sum.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.553 s


- To check the code coverage, update the package.json file as below
```sh
"scripts": {
    "test": "jest --coverage"
  },
```
  
  
 - fter updating the package.json file. Execute the 'npm test' command to check the code coverage

 PASS  ./cloneArray.test.js
 PASS  ./subtract.test.js
 PASS  ./sum.test.js       
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
All files      |     100 |      100 |     100 |     100 | 
 cloneArray.js |     100 |      100 |     100 |     100 | 
 subtract.js   |     100 |      100 |     100 |     100 | 
 sum.js        |     100 |      100 |     100 |     100 | 
---------------|---------|----------|---------|---------|-------------------
