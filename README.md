# LibGuides: React-Node.js-Express-MySQL
- Full stack for learning 
## CRUD application: 
- The back-end server uses Node.js + Express for REST APIs.
- The frond-end side is a React.js client with React Router, Axios & Bootstrap. 
### LibGuides application:
- Books has id, title, description, published status.
- User can create, retrieve, update, delete Books.
- There is a search box for finding Books by title. 
#### Example
- Add an book
- Show all books
- Click on Edit button to view details of an book
- Change status to Published/Pending using Publish/Unpublished button
- Remove the object from MySQL Database using Delete button
- Update the object's details on Database with Update button
- Search objects by field 'title':
## Architecture
### React, Node.js Express, MySQL
- Node.js Express exports REST APIs & interacts with MySQL Database using Sequeilze ORM.
- React client sents HTTP Requests and Retrieves HTTP Responses using Axios, consume data on the components. 
- React Router is used for navigating to pages.  
#### Node.js Rest APIs with Express, Sequelize & MySQL
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
+
............................
$ npm install express --save 
............................
- Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
+
..............................
$ npm install --save sequelize
.............................. 
- [Download Offical MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html)

