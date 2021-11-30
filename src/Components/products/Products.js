import { React, useEffect } from "react";
 import { connect } from "react-redux";
import { fetchProducts ,fetchProduct} from "../../redux/actions/actions";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Products({ products, fetchProducts,fetchProduct }) {
  useEffect(() => {
    fetchProducts();
   },[fetchProducts]);
 
  return (
    
    <motion.div className="products"
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", duration: 1 }}
    >   
          {products.length > 0 ?
          
          <Container>
           <Row>
            { products.map((product) => (
             <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`product/${product.id}`} onClick={() =>fetchProduct(product.id)} >
                <Card className='card'>
                    <div className='image-container'>
                     <Card.Img variant="top" src={product.image} className="card-img" />
                    </div>
                  <Card.Body>
                    <Card.Title>{product.price}</Card.Title>
                    <Card.Text>{product.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
       )) }
         </Row>
      </Container>
       : <p style={{textAlign:"center", fontSize:"30px"}}>Loading...</p>
          
          }

     </motion.div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct:(id) => dispatch(fetchProduct(id))
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Products);
