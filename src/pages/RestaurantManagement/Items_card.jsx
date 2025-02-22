import PropTypes from "prop-types";

const Itemscard = ({ foodItems }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {foodItems.length === 0 ? (
          <p className="text-center">No food items added yet.</p>
        ) : (
          foodItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <h6 className="text-danger">${item.price}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Itemscard.propTypes = {
  foodItems: PropTypes.array.isRequired, // Ensure data is received
};

export default Itemscard;
