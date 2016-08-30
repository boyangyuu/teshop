# ShopNX - Shopping Cart with AngularJS (eCommerce web application)
A single page Shopping Cart web applications with many necessary features of an ecommerce application.


# Requirements
Install the following 2 softwares

1.    Node http://nodejs.org/ (Server)
2.    MongoDB https://www.mongodb.org/ (Database) -
      You need to start the mongodb database by browsing into the bin directory and running mongod.exe or mongod.sh

# Install
Run the following commands and the application will start automatically

1.    npm install yo -g (Install yeoman for scaffolding web application)
2.    npm install grunt-cli -g (This creates and runs javascript repetitive tasks )
3.    npm install bower -g ( A frontend package manager for web applications)
4.    npm install generator-angular-fullstack -g ( A frontend package manager for web applications)
5.    npm install (Install all nodejs dependencies)
6.    bower install (Automatically installs all bower dependencies)
7.    grunt serve (Starts the application in development mode)


8.    grunt serve:dist --force (--- Optional --- This will generate the code for production/distribution)
      The code is placed inside the dist directory

# Scaffolding the application
The following are basic commands which will generate the required code for your app.

1.     yo angular-fullstack:endpoint myApi [Will generate a new api endpoint named myApi for you]
                                  This can be accessed at http://localhost:9000/api/myApi
2.     yo angular-fullstack:route myRoute [This will automatically generate a new route for the application]
                               We can access it by pointing to http://localhost:9000/myRoute
                               This route's content can be modified from client/app/myRoute directory

# Coding standards

1.    All AngularJS directives are placed inside client/app/directive
2.    AngularJS filters are placed inside client/app/filters
3.    Application authentication routes are under client/app/account


# Features
### Store Front features
*  Single page web app (SPA) created using AngularJS, NodeJS, Express, MongoDB (MEAN)
*  Fastest shop experience
*  Fast Product Search, Filter with AJAX
*  Price slider and multiple brand selector
*  Faster Add to Cart and Product Details
*  Checkout with Paypal Integration
*  Minimal User Registration process
*  Order history and Password Management
*  Facility for Multi level Category
*  Mobile optimized with Bootstrap
*  Instant updates for any changes made across all clients with SocketIO implementation
*  Loads more products on scroll (No paging required)
*  Clean and responsive user interface
### Store Back Office
*  Products, Categories, Brand, Order Management from admin panel with easy directives
*  Manage Order and Change Status from admin panel
*  Facility for Multiple product variants (size, color, price, image)
*  User roles - Administrator, User, Guest
*  SEO friendly URLs for each page
*  Secure and quality code - Takes care all single page web app standards
*  Securely built and prevent security attacks

### Future Plan
* Plan to add OAUTH login with facebook, gmail, twitter
