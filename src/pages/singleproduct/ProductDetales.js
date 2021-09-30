import { React, useEffect  } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/actions/actions";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Select from "../../Components/Select";

function ProductDetales({ product, fetchProduct,addToCart }) {

  // const [select, upDateSelect] = useState(1);
  // console.log(`hey :${select}`);
  // const handleSelect = (e) => {
  //   upDateSelect(e.target.value);
  // };

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

               {/* <div className="selected">
                
                <select onChange={handleSelect} className="Selected-Value">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>

                <button
                  onClick={() => addToCart(id, select)}
                  className="selected-butn">
                  Add To Cart
                </button>

              </div>   */}

               <Select id={id} />
               
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
    // addToCart: (id, value) => dispatch(addToCart(id, value)),
  };
};

const mapStateToProps = (state) => {
  return {
    product: state.data.product,
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ProductDetales);
