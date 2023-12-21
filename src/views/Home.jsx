import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import { Cart_total } from "../context/cart";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, NavLink } from "react-router-dom";
import Add_button from "../components/AddingButton";
import Sus_button from "../components/SustractingButton";

const Home = () => {
  const { Pizzas, SetPizzas} = useContext(Pizzas_context);
  const {Total_cart, SetTotal_cart} = useContext(Cart_total);

  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/pizza/:id");
  };
  const goToCart = () => {
    navigate("/carrito");
  };
  return (
    <div className="App">
      <h1>Pizza Mamma Mia!</h1>
      <h2>{Total_cart}</h2> {/* aquí esta insertado el total que se calcula con el segundo contexto para ocuparlo en el carrito */}
      <div className="gallery grid-columns-5 p-3">
        {Pizzas.map((pizza) => (
          <div key={pizza.id}>
            <section>
              <Card className="photo" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  onClick={goToDetails}
                  src={pizza.img}
                  alt=""
                />
                <Card.Body>
                  <h3>{pizza.name}</h3>
                  <p> {pizza.price} </p>{" "}
                  <div className="d-flex justify-content-around">
                    <Sus_button pizza_id={pizza.id}/>
                    <h5>{pizza.Qty}</h5>
                    <Add_button pizza_id={pizza.id}/>
                  </div>
                  <div className="buttons">
                    <Button variant="primary" onClick={goToDetails}>
                      ver mas
                    </Button>
                    <Button variant="primary" onClick={goToCart}>
                      Carrito
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
