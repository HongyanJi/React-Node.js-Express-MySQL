/* 
* This Sequelize Model represents books table in MySQL database. 
* These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.
*/
module.exports = (sequelize, Sequelize) => {
      const Book = sequelize.define("book", {
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        published: {
          type: Sequelize.BOOLEAN
        }
      });
    
      return Book;
    };

/*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new Book: create(object)
find a Book by id: findByPk(id)
get all Books: findAll()
update a Book by id: update(data, where: { id: id })
remove a Book: destroy(where: { id: id })
remove all Books: destroy(where: {})
find all Books by title: findAll({ where: { title: ... } })

These functions will be used in our Controller.
*/