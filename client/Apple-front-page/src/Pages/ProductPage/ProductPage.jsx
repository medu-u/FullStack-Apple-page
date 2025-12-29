import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../../Pages/Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => {

        const productList = data.products;
        const singleProduct = productList.filter(
            (product) => product.product_url===productID
        );

        setProduct(singleProduct);

      })
      .catch(() =>
        console.error("Error fetching product!!"));

      }, []);
console.log(product);
// if (product.length) {
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1>{productID}</h1>
          {product?.map((product) => {
            return (
              <div key={product.product_id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wrapper font-weight-bold">
                      {product.product_name}
                    </div>
                    <div className="brief-description">
                      {product.product_brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="product-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
// } else {
//   return <Four04 />;
// }
}

export default ProductPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../../Pages/Four04/Four04";

// function ProductPage() {
//   const [product, setProduct] = useState(null);
//   const { ProductID } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         const productList = data.products;
//         const singleProduct = productList.filter(
//           (product) => product.product_url === ProductID
//         );
//         setProduct(singleProduct);
//       })
//       .catch(() => console.error("Error fetching product!!"));
//   }, [ProductID]);

//   // If still loading
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   // If no matching product found
//   if (product.length === 0) {
//     return <Four04 />;
//   }

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           {product.map((product) => {
//             return (
//               <div key={product.product_id}>
//                 <div className="row justify-content-center text-center">
//                   <div className="col-12 mt-5 pt-5">
//                     <div className="title-wrapper font-weight-bold">
//                       {product.product_name}
//                     </div>
//                     <div className="brief-description">
//                       {product.product_brief_description}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row justify-content-center text-center product-holder h-100 m-5">
//                   <div className="col-sm-12 col-md-6 my-auto">
//                     <div className="product-image">
//                       <img src={product.product_img} alt="product" />
//                     </div>
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

// export default ProductPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// function ProductPage() {
//   const [product, setProduct] = useState([]);

//   const { productID } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         const productList = data.products;
//         const singleProduct = productList.filter(
//           (product) => product.product_url === productID
//         );

//         setProduct(singleProduct);
//       })
//       .catch(() => console.error("Error fetching product!!"));
//   }, [productID]);

//   // product not loaded yet
//   if (!product) {
//     return null;
//   }

//   // product not found
//   if (product.length === 0) {
//     return <Four04 />;
//   }

//   console.log(product);

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           {product?.map((product) => {
//             return (
//               <div key={product.product_id}>
//                 <div className="row justify-content-center text-center">
//                   <div className="col-12 mt-5 pt-5">
//                     <div className="title-wrapper font-weight-bold">
//                       {product.product_name}
//                     </div>
//                     <div className="brief-description">
//                       {product.product_brief_description}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row justify-content-center text-center product-holder h-100 m-5">
//                   <div className={`col-sm-12 col-md-6 my-auto`}>
//                     <div className="product-image">
//                       <img src={product.product_img} alt="product" />
//                     </div>
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

// export default ProductPage;
