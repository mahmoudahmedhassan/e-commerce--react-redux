import { React, useEffect  } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/actions/actions";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Select from "../../Components/Select";

function ProductDetales({ product, fetchProduct }) {

 

  const { id, image, title, description, price, category } = product ?? {};
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
 
    <Container>
      <div className="ProductDetales">
        <Row>
          <Col md={12} lg={6}>
            <motion.div
              className="product-img"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
             <Image src={image} alt={title} /> 
             </motion.div>
          </Col>
          <Col md={12} lg={6}>
            <motion.div
              className="product-details"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <div className="category"> {category}</div>

              <div className="title">
                <h1>{title}</h1>
                <p>EGP {price}</p>
              </div>

               <Select id={id} itemQuantity ={1}/>
               
              <div className="description">{description}</div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
const mapDispatchToState = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct()),
   };
};

const mapStateToProps = (state) => {
  return {
    product: state.data.product,
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ProductDetales);
