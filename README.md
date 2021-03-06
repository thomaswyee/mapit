# Map IT!

MapIt! is a full-stack single-page RESTful web application allowing users to share and create categorized maps. [Below are screenshots of the project](#final-product)

The Stack used for this project:

1. Node.js
2. Express
3. AJAX
4. jQuery
5. SCSS
6. LeafletJS
7. PostgreSQL

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

## Final Product

!["screenshot of the main page"](https://github.com/thomaswyee/mapit/blob/master/public/images/Main.png)
_screenshot of the main page_
!["screenshot of the login page"](https://github.com/thomaswyee/mapit/blob/master/public/images/Login.png)
_screenshot of the login page_
!["screenshot of the register page"](https://github.com/thomaswyee/mapit/blob/master/public/images/SignUp.png)
_screenshot of the register page_
!["screenshot of the main page after sign in"](https://github.com/thomaswyee/mapit/blob/master/public/images/Main_Signed_In.png)
_screenshot of the main page_
!["screenshot of favourite page"](https://github.com/thomaswyee/mapit/blob/master/public/images/myFavs.png)
_screenshot of favourite page_
!["screenshot of contributed page"](https://github.com/thomaswyee/mapit/blob/master/public/images/contributed_maps.png)
_screenshot of contributed page_
!["screenshot of created page"](https://github.com/thomaswyee/mapit/blob/master/public/images/created_map_nav.png)
_screenshot of created page_
!["screenshot of the edit marker page"](https://github.com/thomaswyee/mapit/blob/master/public/images/update_marker_form.png)
_screenshot of the edit marker page_
!["screenshot of the mobile view"](https://github.com/thomaswyee/mapit/blob/master/public/images/mobile_view.png)
_screenshot of the mobile view_
