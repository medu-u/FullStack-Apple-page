//Import mysql driver
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

// Middle ware to extract info from the html body name attribute
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middle ware to extract info from the frontend that are sent through json
app.use(express.json());

// Middle ware to let frontend app requests to read or use data
app.use(cors());

app.get("/", (req, res) => res.send("Up and running..."));

//Pass credentials to createConnection method
const connection = mysql.createConnection({
  user: "myDBuser",
  password: "12345678",
  host: "127.0.0.1",
  database: "myDB",
});

//to connect to MySQL DB
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:" + err.stack);
    return;
  }
  console.log("Connected");
});

app.get("/install", (req, res) => {
  // let message = "Tables Created";
  // products table
  let createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url VARCHAR(255) not null,
      product_name VARCHAR (255) not null,

      PRIMARY KEY (product_id)
    )`;

  // product description table
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description VARCHAR(255) not null,
      product_description VARCHAR(255) not null,
      product_img VARCHAR(255) not null,
      product_link VARCHAR(255) not null,

      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
      )`;

  // product price table
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,

    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  //let create user
  let createUser = `CREATE TABLE if not exists Users(
    user_id int auto_increment,
    user_name VARCHAR(255) not null,
    user_password VARCHAR(255) not null,

    PRIMARY KEY (user_id)
    )`;
  //  Orders Table

  let createOrder = `CREATE TABLE if not exists Orders(
    order_id int auto_increment,
    product_id int(11) not null,
    user_id int(11) not null,

    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products (product_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`;

  //Executing the query's we wrote above
  connection.query(createProducts, (err) => {
    if (err) console.log(err);
  });

  connection.query(createProductDescription, (err) => {
    if (err) {
      console.log(err);
    }
  });

  connection.query(createProductPrice, (err) => {
    if (err) {
      console.log(err);
    }
  });

  connection.query(createUser, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connection.query(createOrder, (err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("Table created");
});

// Q3.

// // // Route: add-products => To insert data to the tables
app.post("/add-product", (req, res) => {
  // console.log(body.req);

  // products table

  const {
    product_url,
    product_name,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    user_name,
    user_password,
  } = req.body;

  const insertProduct = () => {
    connection.query(
      `INSERT INTO Products(product_url,product_name) VALUES (?, ?)`,

      [product_url, product_name],
      (err, result) => {
        if (err)
          return res.status(404).json({ success: false, message: err.message });

        const productId = result.insertId;
        insertDescription(productId);
      }
    );
  };

  // product_description table

  const insertDescription = (productId) => {
    connection.query(
      `INSERT INTO ProductDescription(product_id,
    product_brief_description,
    product_description,
    product_img,
    product_link) VALUES (?, ?, ?, ?, ?)`,
      [
        productId,
        product_brief_description,
        product_description,
        product_img,
        product_link,
      ],
      (err) => {
        if (err)
          if (err)
            return res
              .status(404)
              .json({ success: false, message: err.message });

        insertPrice(productId);
      }
    );
  };
  //   // // ProductPrice table

  const insertPrice = (productId) => {
    connection.query(
      ` INSERT INTO ProductPrice(product_id,  starting_price, price_range) VALUES (?, ?, ?)`,
      [productId, starting_price, price_range],
      (err) => {
        if (err)
          return res.status(404).json({ success: false, message: err.message });

        insertUser(productId);
      }
    );
  };

  //  user Table
  const insertUser = (productId) => {
    connection.query(
      `
    INSERT INTO Users(user_name, user_password) VALUES (?,?)`,

      [user_name, user_password],
      (err, result) => {
        if (err)
          return res.status(404).json({ success: false, message: err.message });

        insertOrder(productId, result.insertId);
      }
    );
  };
  //   // order table

  const insertOrder = (productId, userId) => {
    connection.query(
      `
    INSERT INTO Orders(product_id, user_id) VALUES (?,?) `,

      [productId, userId],
      (err) => {
        if (err)
          return res.status(404).json({ success: false, message: err.message });

        res.json({ Success: true });
      }
    );
  };

  insertProduct();
});

// app.get("/iphones", (req, res) => {
//   connection.query(
//     "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice JOIN Orders JOIN Users ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
//     (err, rows) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send("Database error");
//       }

//       // ✅ REMOVE DUPLICATE PRODUCTS USING product_id
//       const uniqueProducts = [];
//       const seen = new Set();

//       rows.forEach((item) => {
//         if (!seen.has(item.product_id)) {
//           seen.add(item.product_id);
//           uniqueProducts.push(item);
//         }
//       });

//       // ✅ Send clean data to React
//       res.json({ products: uniqueProducts });
//     }
//   );
// });

app.get('/iphones',(req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",(err, rows, fields) => {
      let iphones ={ products: []};
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if(!err) res.end(stringIphones);
      else console.log(err);
    }

  );
});
// AND Products.product_id = Orders.product_id AND Product.product_id=Users.product_id

app.listen(3001, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening to: http://localhost:3001");
  }
});
