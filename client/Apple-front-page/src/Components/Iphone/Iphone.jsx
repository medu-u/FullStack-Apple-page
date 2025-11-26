// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Iphone() {
    
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//       })
//       .catch((err) => console.log("Error unable to fetch!!"));
//   }, []);
// console.log(products);
//   let flip = true;

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               <h1 className="font-weight-bold">Iphones</h1>
//               <div className="brief-description mb-5">
//                 The best for the Brightest.
//               </div>
//             </div>
//           </div>

//           {products?.map((product) => {
//             let order1 = 1;
//             let order2 = 2;

//             if (flip) {
//               order1 = 2;
//               order2 = 1;
//               flip = !flip;
//             } else {
//               flip = !flip;
//             }

//             let productDiv = (
//               <div
//                 key={product.product_url}
//                 className="row justify-content-center text-center product-holder h-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-brief">
//                     {product.product_brief_description}
//                   </div>

//                   <div className="starting-price">
//                     {`Starting at ${product.starting_price}`}
//                   </div>

//                   <div className="monthlt-price">{product.price_range}</div>

//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={`/iphone/${product.product_url}`}>
//                           Learn more
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={product.product_img} alt="product" />
//                   </div>
//                 </div>
//               </div>
//             );

//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Iphone;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => console.log("Error unable to fetch!!"));
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {/* Title Section */}
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description mb-5">
                The best for the Brightest.
              </div>
            </div>
          </div>

          {/* Product List */}
          {products.map((product, index) => {
            // ORDER FIX — alternate image & text every row
            const orderText = index % 2 === 0 ? 1 : 2;
            const orderImage = index % 2 === 0 ? 2 : 1;

            return (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100 mb-5"
              >
                {/* TEXT COLUMN */}
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${orderText}`}
                >
                  <div className="product-brief">
                    {product.product_brief_description}
                  </div>

                  <div className="starting-price">
                    Starting at {product.starting_price}
                  </div>

                  <div className="monthlt-price">{product.price_range}</div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* IMAGE COLUMN */}
                <div className={`col-sm-12 col-md-6 order-${orderImage}`}>
                  <div className="product-image">
                    <img
                      src={product.product_img}
                      alt={product.product_name}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
