// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch(() => console.log("Error fetching data!"));
//   }, []);

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           {/* Title Section */}
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               <h1 className="font-weight-bold">iPhones</h1>
//               <div className="brief-description mb-5">
//                 The best for the Brightest.
//               </div>
//             </div>
//           </div>

//           {/* Product Loop */}
//           {products?.map((product, index) => {
//             const order1 = index % 2 === 0 ? 2 : 1;
//             const order2 = index % 2 === 0 ? 1 : 2;

//             return (
//               <div
//                 key={product.product_url}
//                 className="row justify-content-center text-center product-holder h-100 mb-5"
//               >
//                 {/* Text Column */}
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-brief">
//                     {product.product_brief_description}
//                   </div>

//                   <div className="starting-price">
//                     Starting at {product.starting_price}
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

//                 {/* Image Column */}
//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img
//                       src={product.product_img}
//                       alt={product.product_name}
//                       className="img-fluid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
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
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {/* Title Section */}
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">iPhones</h1>
              <div className="brief-description mb-5">
                The best for the Brightest.
              </div>
            </div>
          </div>

          {/* Product Loop */}
          {products.map((product, index) => {
            // Alternate text/image order
            const orderText = index % 2 === 0 ? 2 : 1;
            const orderImage = index % 2 === 0 ? 1 : 2;

            return (
              <div
                key={product.product_id}
                className="row justify-content-center text-center product-holder h-100 mb-5"
              >
                {/* Text Column */}
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

                {/* Image Column */}
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
