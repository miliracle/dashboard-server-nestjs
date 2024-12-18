// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table User {
  id string [PK]
  name string
  email string
  address string
}

Table Order {
  id string [PK]
  total float
  created_at datetime
  updated_at datetime
  user_id string
}

Table Product {
  id string [PK]
  name string
  price float
  created_at datetime
  updated_at datetime
}

Ref: User.id < Order.user_id
Ref: Order.id <> Product.id