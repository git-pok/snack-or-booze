import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  // DEFINED mapCtgry and mapUrlCtgry.
  const mapCtgry = snacks ? snacks : drinks;
  const mapUrlCtgry = snacks ? "snacks" : "drinks";

  return (
    <section className="col-md-4 FoodItem">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snacks ? "Snack Menu" : "Drink Menu" }
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {/* DEFINED mapCtgry map. */}
            { 
              mapCtgry.map(item => (
                              <Link
                                to={`/${mapUrlCtgry}/${item.id}`}
                                key={item.id}>
                              <ListGroupItem>{item.name}</ListGroupItem>
                              </Link>
                            ))
            }
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
