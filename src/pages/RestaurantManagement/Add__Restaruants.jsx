import image1 from "../../assets/bg_images/food_banner1.jpg";
import Resturant_form from "./Resturant_form";
import Itemscard from "./Items_card";
import Addfooditems from "./Add_fooditems";
import { useRef, useState } from "react";

export default function AddRestaurant() {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  // 🔴 State to store food items (moved here)
  const [foodItems, setFoodItems] = useState([]);

  return (
    <>
      {/* Hero Section */}
      <section className="mt-4 px-3 py-4">
        <div
          className="d-flex flex-column flex-sm-row m-0 m-auto text-center text-white w-auto h-auto rounded-3 hero p-5"
          style={{ backgroundImage: `url(${image1})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="p-3 col-12">
            <h4>Add Your Restaurant</h4>
            <p className="fs-6 fs-sm-4">
              Boost visibility, attract more customers & grow your business.
              <br />
              Join now to showcase your menu & increase orders!
            </p>
            <button onClick={scrollToForm} className="p-2 border-0 rounded text-white" style={{ backgroundColor: "#dc3545" }}>
              Add Restaurants
            </button>
          </div>
        </div>
      </section>

      {/* Add Restaurant Form Section */}
      <Resturant_form />

      {/* 🔴 Pass `foodItems` state to Itemscard */}
      <div className="container mt-5 d-flex flex-column align-items-center text-center">
        <h4 className="text-center">Added Food Items</h4>
        
        {/* Ensure Itemscard receives foodItems */}
        <Itemscard foodItems={foodItems} />
        
        <button className="w-auto border-0 p-2 text-white rounded mt-3" style={{ backgroundColor: "red" }}>
          Submit
        </button>
      </div>

      {/* 🔴 Pass `setFoodItems` function to Addfooditems */}
      <Addfooditems setFoodItems={setFoodItems} />
    </>
  );
}
