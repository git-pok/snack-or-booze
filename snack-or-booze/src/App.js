import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./FoodMenu";
import MenuItem from "./FoodItem";
import NotFound from "./NotFound";
import AddMenuItemForm from "./AddMenuItemForm";
import MenuItemContext from "./context/MenuItemContext";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  // DEFINED menuItems state.
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    // DEFINED getMenuItems.
    async function getMenuItems() {
      const menuItemsReq = [];
      menuItemsReq.push(
        SnackOrBoozeApi.getSnacksOrDrinks("snacks"),
        SnackOrBoozeApi.getSnacksOrDrinks("drinks")
      )

      const menuItemsData = await Promise.all(menuItemsReq);

      setMenuItems(
              {
                snacks: menuItemsData[0],
                drinks: menuItemsData[1]
              }
      );
      setIsLoading(false);
    }

    getMenuItems();

  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  
  return (
    // DEFINED Context;
    <MenuItemContext.Provider value={setMenuItems}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home snacks={menuItems.snacks} drinks={menuItems.drinks} />
              </Route>
              <Route exact path="/snacks">
                <Menu snacks={menuItems.snacks} title="Snacks" />
              </Route>
              {/* DEFINED /drinks Route. */}
              <Route exact path="/drinks">
                <Menu drinks={menuItems.drinks} title="Drinks" />
              </Route>
              {/* DEFINED AddMenuItem Route */}
              <Route exact path="/menu/new">
                <AddMenuItemForm />
              </Route>
              <Route path="/snacks/:id">
                <MenuItem type="snacks" items={menuItems.snacks} cantFind="/snacks" />
              </Route>
              {/* DEFINED /drinks/:id Route */}
              <Route path="/drinks/:id">
                <MenuItem type="drinks" items={menuItems.drinks} cantFind="/drinks" />
              </Route>
              <Route exact path="/404">
                <NotFound />
              </Route>
              <Redirect exact to="/404" />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </MenuItemContext.Provider>
  );
}

export default App;
