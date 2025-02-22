import { useState } from "react";
import PropTypes from "prop-types";

export default function Addfooditems({ setFoodItems }) {
  const [foodTitle, setFoodTitle] = useState("");
  const [foodDesc, setFoodDesc] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFoodImage(URL.createObjectURL(file));
    }
  };

  const handleAddFoodItem = () => {
    if (!foodTitle || !foodPrice || !foodDesc) {
      alert("Please fill all fields before adding.");
      return;
    }

    const newFoodItem = {
      id: Date.now(),
      title: foodTitle,
      description: foodDesc,
      price: foodPrice,
      image: foodImage || "https://via.placeholder.com/150",
    };

    // 🔴 Update parent state (AddRestaurant)
    setFoodItems((prevItems) => [...prevItems, newFoodItem]);

    // Clear input fields
    setFoodTitle("");
    setFoodDesc("");
    setFoodPrice("");
    setFoodImage(null);
  };

  return (
    <>
      {/* Modal Structure */}
      <div className="modal fade" id="addModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Food Items</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the food item name"
                  value={foodTitle}
                  onChange={(e) => setFoodTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter price"
                  value={foodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                />
              </div>
              <textarea
                className="form-control"
                placeholder="Enter the description of the food item"
                value={foodDesc}
                onChange={(e) => setFoodDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleAddFoodItem}
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Addfooditems.propTypes = {
  setFoodItems: PropTypes.func.isRequired, // Ensure prop is passed
};
