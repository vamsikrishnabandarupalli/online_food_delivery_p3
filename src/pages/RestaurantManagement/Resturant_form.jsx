import { useState } from "react";
import PropTypes from "prop-types";
import Addfooditems from "./Add_fooditems";

const Resturant_form = ({ formRef }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="container mt-5" ref={formRef}>
      <h4 className="text-center">Add Your Restaurant</h4>
      <div className="row justify-content-center mt-5">
        
        {/* Left Section (Upload Circular Image) */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
          <div className="text-center">
            <h5 className="mb-3">Upload Restaurant Image</h5>

            {/* Circular Image Upload */}
            <div
              className="rounded-circle overflow-hidden border border-2 mx-auto"
              style={{ width: "150px", height: "150px", position: "relative", cursor: "pointer" }}
              onClick={() => document.getElementById("restaurantImage").click()}
            >
              {image ? (
                <img src={image} alt="Uploaded" className="w-100 h-100 object-fit-cover" />
              ) : (
                <div
                  className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  Upload Image
                </div>
              )}
            </div>

            {/* Hidden File Input */}
            <input type="file" id="restaurantImage" accept="image/*" className="d-none" onChange={handleImageChange} />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="col-12 col-lg-6">
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
                  <input type="text" className="form-control" id="restaurantName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="restaurantEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="restaurantEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="restaurantContact" className="form-label">Contact Number</label>
                  <input type="text" className="form-control" id="restaurantContact" />
                </div>
                <div className="mb-3">
                  <label htmlFor="restaurantLocation" className="form-label">Location</label>
                  <input type="text" className="form-control" id="restaurantLocation" />
                </div>

              </div>

              <div className="col-12 col-md-6">

                <div className="mb-3">
                  <label htmlFor="restaurantLicence" className="form-label">Licence Number</label>
                  <input type="number" className="form-control" id="restaurantLicence" />
                </div>
                <div className="mb-3">
                  <label htmlFor="restaurantDescription" className="form-label">Description</label>
                  <textarea className="form-control" id="restaurantDescription" rows="4"></textarea>
                </div>
                {/* Open Modal on Click */}
                <button
                  type="button"
                  className="w-100 mt-3 border-0 p-2 text-white rounded"
                  style={{ backgroundColor: "red" }}
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                >
                  Add Food Items
                </button>
            
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Add Food Items Modal */}
      <Addfooditems />
    </div>
  );
};
Resturant_form.propTypes = {
  formRef: PropTypes.object.isRequired,
};

export default Resturant_form;

