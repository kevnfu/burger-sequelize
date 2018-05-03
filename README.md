# burger-sequelize

## Description

User can add burgers that are then displayed on the page. Clicking on the Devour button will prompt the user to input their name. Burger will then be marked devoured and keep a record of who ate it.

## API
GET `/api/customers` returns all of the people who have eaten burgers.
POST `/api/customers` {name} adds new customer 
GET `/api/search/customers` query:name searches for a customer by name. 
GET `/api/burgers` returns all of a join between burgers and customers
POST `/api/burgers` {name} adds new burger. 
PUT `/api/burgers` {id, CustomerId} marks burger w/ `id` devoured, and adds the customer that ate it.