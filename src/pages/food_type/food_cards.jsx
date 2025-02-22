import veg_items from '../../assets/food_images/veg_items.jpg';
import non_veg_items from '../../assets/food_images/non_veg_items.jpg';

export default function FoodCards() {
  return (
    <section className="container my-5">
      <div className="row g-4 justify-content-center">
        {/* Veg Card */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0">
            <img
              src={veg_items}
              className="card-img-top"
              alt="Veg Restaurants"
              style={{ height: '300px' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Veg Items</h5>
              <p className="card-text">
                Savor the best vegetarian flavors from top restaurants, freshly prepared and delivered to you!
              </p>
              <button className="p-2 border-0 rounded text-white" style={{backgroundColor: '#dc3545'}}>View Restaurants</button>
            </div>
          </div>
        </div>

        {/* Non-veg Card */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0">
            <img
              src={non_veg_items}
              className="card-img-top"
              alt="Non-veg Restaurants"
              style={{ height: '300px' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Non-veg Items</h5>
              <p className="card-text">
                Indulge in delicious non-veg dishes from the finest restaurants, hot and ready to enjoy!.
              </p>
              <button className="p-2 border-0 rounded text-white" style={{backgroundColor: '#dc3545'}} >View Restaurants</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
