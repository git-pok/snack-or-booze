import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  // DEFINED getSnacksOrDrinks.
  // Defined parameter for different categories.
  static async getSnacksOrDrinks(ctgry) {
    const result = await axios.get(`${BASE_API_URL}/${ctgry}`);
    return result.data;
  }

  // DEFINED POST.
  static async POST(ctgry, data) {
    const result = await axios.post(
        `${BASE_API_URL}/${ctgry}`,
        data
      );
    return result.data;
  }
}

export default SnackOrBoozeApi;
