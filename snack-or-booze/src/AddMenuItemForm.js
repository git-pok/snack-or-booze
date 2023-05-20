import SnackOrBoozeApi from "./Api";
import { Card, CardBody } from "reactstrap";
import { useState, useContext, useEffect } from 'react';
import MenuItemContext from "./context/MenuItemContext";
import Error from './Error';
import ToggleSwitch from "./hooks/ToggleSwitch";
import "./AddMenuItemForm.css";

// DEFINED ALL LOGIC IN THIS FILE.
/**
 * AddMenuItemForm: controlled component
 * Renders: form
 * Logics:
 *    form submits,
 *    POST request to API,
 *    sets parent's snacks and drinks state
 */
const AddMenuItemForm = () => {
  // Initital state for formData
  const initialFormState = {
    description: "",
    name: "",
    recipe: "",
    serve: ""
  };
  // Initital state for select 
  const initialSelectState = { menuItem: "" };

  const [ formData, setFormData ] = useState(initialFormState);
  const [ select, setSelect ] = useState(initialSelectState);
  const [ isValid, setIsValid ] = ToggleSwitch(false);
  const [ isSubmitted, setIsSubmitted ] = ToggleSwitch(false);
  const [ effect, setEffect ] = ToggleSwitch(false);
  const BASE_API_URL = "http://localhost:5000";
  const setMenuItems = useContext(MenuItemContext);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSelect = evt => {
    const { name, value } = evt.target;

    setSelect(selectData => ({
      [name]: value
    }))
  }

  useEffect(() => {

    const POSTnewItem = async (ctgry, data) => {
      SnackOrBoozeApi.POST(ctgry, data);
    }

    if (effect) {
        POSTnewItem(select.menuItem, {...formData, id: formData.name});
        setEffect();
        setFormData(() => initialFormState);
    }

  }, [effect]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setIsSubmitted();
    const { description, name, recipe, serve } = formData;
    const formDataValues = Object.values(formData);
    const isMissingData = formDataValues.includes("");
    const isSelectEmpty = select.menuItem === "";
    const submittedData = { description, name, recipe, serve, id: name };

    if (!isSelectEmpty && !isMissingData) {
      setIsValid();
      setEffect();

      const selectValue = select.menuItem;

      setMenuItems(items => {
        const newItems = {
          snacks: items.snacks,
          drinks: items.drinks
        }
        newItems[selectValue].push(submittedData);
        return newItems; 
      });

      setIsSubmitted();
      setIsValid();

    } else {
      setTimeout(() => {
        setIsSubmitted();
      }, 2000);
    }
  }

  return (
    <>
    <div className="AddMenuItemForm-bg">
    <Card className="AddMenuItemForm-card">
        <CardBody>
        <div className="AddMenuItemForm-content">
        {isSubmitted && !isValid ? <Error msg="Fill all fileds!" /> : null}
          <select name="menuItem" id="menu-item-select" onChange={handleSelect}>
            <option value="">Select Category</option>
            <option value="snacks">Snack</option>
            <option value="drinks">Drink</option>
          </select>

          <form className="AddMenuItemForm-form" onSubmit={handleSubmit}>
            <div className="AddMenuItemForm-inputs">
              <div className="AddMenuItemForm-input-div">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type a name"
                  value={formData.name}
                  onChange={handleChange}></input>
              </div>
              <div className="AddMenuItemForm-input-div">
                <label htmlFor="name">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Type a description"
                  value={formData.description}
                  onChange={handleChange}></input>
              </div>
              <div className="AddMenuItemForm-input-div">
                <label htmlFor="name">Recipe</label>
                <input
                  type="text"
                  name="recipe"
                  placeholder="Type a recipe"
                  value={formData.recipe}
                  onChange={handleChange}></input>
              </div>
              <div className="AddMenuItemForm-input-div">
                <label htmlFor="name">Serve</label>
                <input
                  type="text"
                  name="serve"
                  placeholder="Type a serve"
                  value={formData.serve}
                  onChange={handleChange}></input>
              </div>
            </div>
            <div className="AddMenuItemForm-button">
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
}

export default AddMenuItemForm;
