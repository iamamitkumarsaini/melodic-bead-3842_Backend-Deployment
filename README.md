# Backend Side of Gadgetbest.com
### This website is a replica of Gearbest
Gadgetbest is an online E-commerce website that specializes in consumer electronics and gadgets, offering a wide range of products. 

## Tech Stacks
- Node.js
- Express.js
- mongodb
- jwt
- bcrypt
- nodemon
- cors

## MVC Structure
I followed the MVC Structure while writing the backend code.

## Secured Password
Used bcrypt for hashing the password before storing in the mongodb database.

## jwt for token
I have used jwt npm package for generating the tokens for users once the successfully logged-in. And the token should be provided with all the requests in headers to access private routes.

## Additional Functionalities
I have given pagination, sorting, filtering, and search functionalities in the url for better user experience.
