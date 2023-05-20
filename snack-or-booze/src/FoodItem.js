import React from "react";
import './FoodItem.css';
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ type, items, cantFind }) {
  const { id } = useParams();
  // DEFINED logic to make this component
  // render drinks and snacks. 
  
  let menuItem = items.find(item => item.id === id);
  if (!menuItem) return <Redirect to={cantFind} />;

  return (
    <section className="FoodItem">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuItem.name}
          </CardTitle>
          <CardText className="font-italic">{menuItem.description}</CardText>
          <p>
            <b>Recipe:</b> {menuItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {menuItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
