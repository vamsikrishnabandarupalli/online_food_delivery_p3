import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import './contacts.css';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center">


        {/* Contact Info */}
        <div className="col d-flex my-3">
          <div className=" w-100">
            <h6 className="text-uppercase">Contact Info</h6>
            <section className="mt-4">
                <p><FaLocationDot className="text-danger me-2" /> 123, Hitech City, Hyderabad</p>
                <p><IoMailSharp className="text-danger me-2" /> support@flavordash.com</p>
                <p><FaPhone className="text-danger me-2" /> (+91) 1234567890</p>
            </section>
          </div>
        </div>

        {/* Restaurants */}
        <div className="col d-flex my-3">
          <div className="w-100">
            <h6 className="text-uppercase">Restaurants</h6>
            <nav className="d-flex flex-column lh-base mt-4">
              <a href="/" className="text-decoration-none">Add Restaurant</a>
              <a href="/" className="text-decoration-none">Order for You</a>
            </nav>
          </div>
        </div>

        {/* Company Info */}
        <div className="col d-flex my-3">
          <div className=" w-100">
            <h6 className="text-uppercase">Company</h6>
            <nav className="d-flex flex-column lh-base mt-4">
              <a href="/" className="text-decoration-none">Home</a>
              <a href="/" className="text-decoration-none">About Us</a>
              <a href="/" className="text-decoration-none">Careers</a>
              <a href="/" className="text-decoration-none">Terms & Conditions</a>
            </nav>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col d-flex my-3">
          <div className="w-100">
            <h6 className="text-uppercase">Quick Links</h6>
            <nav className="d-flex flex-column lh-base mt-4">
              <a href="/" className="text-decoration-none">Help</a>
              <a href="/" className="text-decoration-none">Track Your Order</a>
              <a href="/" className="text-decoration-none">Services</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
