import React from "react";
import './Home.css';
import { Card, CardBody, CardTitle } from "reactstrap";
// DEFINED props.
function Home({ snacks, drinks }) {

  const snacksLen = snacks.length; 
  return (
    <section className="col-md-8 Home">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
            {/* DEFINED h5 tags and logic. */}
            <p>Food Items: {snacksLen}</p>
            <p>Drinks: {drinks.map(val => (val.name + ", "))}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
