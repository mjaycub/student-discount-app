
## Project Aim
Use `create-react-app` and `express` to make a dynamic landing page for college students looking for discounted software. If students follow a link specific to their college, they can register and if enough fellow students register they can all receive a discount.

I wrote an `express` server to expose a database, made using [lowdb](https://github.com/typicode/lowdb), and to handle anything on the server side.

The aim was to keep this project under 8 hours which is why some of the later features are quite small. The main focus was on the `server.js`, the `CollegeDetails` view and any components used therein. 


## Running Locally
Clone this repository and run `npm install` to install any dependencies. Run `npm build` to build the project. Then run `npm start` to run the app locally in your browser.

Main UI focal points:
- [/college/usc](http://localhost:8080/college/usc)
- [/admin](http://localhost:8080/admin)

The college sign up landing page is `/college/{collegeName}`, so for example, `/college/usc/` will show the signup page for USC (which is one of the dummy colleges enterred into the local database at the boot up of the server. If you enter a non-existant college name, it will re-direct to a would-be sign up page which is currently blank.

As you can see from the express server and the `CollegeDetails` view, the information displayed on the `CollegeDetails` view is retrieved via the API routes `/api/`.

The admin panel and admin details page were done quite hastily just to give an idea how an admin panel could work with the given demo. A lot of the code is quite rough and not optimised properly due to time constraints.

## Running Tests
I wrote some example tests to show how I would test some of the components of this demo.

The tests are created using `cypress`, a dev dependency that will be installed when you run `npm install` after cloning the project. Ensure the app is running locally and then run `npm test` to run the test suite in your browser.
