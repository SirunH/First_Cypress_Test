# In this e2e test, we  should
1.  Login with valid credentials on the https://www.saucedemo.com/ page
2. Filter products
3. Add product
4. Check cart list
5. Delete product from cart list
6. Log out
## Getting started
### Setup
> 1.GLOBAL DEPENDENCIES

* Install Node.js.
The project is written using the
* v17.8.0 version of Node.js 
* 8.5.5 version of npm
* 9.7.0 version of Cypress

> 2.PROJECT DEPENDENCIES

* cd to the root directory of the project
* Install Node modules using:
* npm install

> 3.RUNNING TESTS

For running the test from your terminal or IDE use one of these two commands
1) browser mode: `npx cypress open`

2) headless mode: `npx cypress run`