import image from '../../assets/bg_images/food_banner.jpg';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <section className="mt-4 px-3 py-4">
      <div 
        className="d-flex flex-column flex-sm-row m-0 m-auto text-center text-white w-auto h-auto rounded-3 hero p-5" 
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="p-3 col-12">
          <p className="fs-6 fs-sm-4">
            Indulge in your favorite flavors with amazing deals. <br/>
            Order now and enjoy delicious meals at unbeatable prices!
          </p>
          <Link to="/restaurants">
            <button className="p-2 border-0 rounded text-white" style={{backgroundColor: '#dc3545'}}>Order Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
