import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getProducts();
   }, []);

   const getProducts = async () => {
      await fetch("/api/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   };

   return (
      <>
         <h1>Latest Products</h1>
         <Row>
            {products.map((product, index) => (
               <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
               </Col>
            ))}
         </Row>
      </>
   );
};

export default HomeScreen;
