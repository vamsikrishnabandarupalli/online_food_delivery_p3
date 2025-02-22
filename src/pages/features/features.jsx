import { LiaShippingFastSolid } from "react-icons/lia";
import { IoReturnUpBack } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiChefHatLight } from "react-icons/pi";

export default function Features() {

    const features = [
        { icon: <LiaShippingFastSolid />, title: "Fast Delivery", desc: "Fast and fresh food delivery with reliable service.", color: "text-info" },
        { icon: <IoReturnUpBack />, title: "Easy Return", desc: "Experience hassle-free returns with easy processing and quick refunds.", color: "text-warning" },
        { icon: <RiSecurePaymentLine />, title: "Secure Payment", desc: "Order securely with encrypted payments and trusted transactions.", color: "text-danger" },
        { icon: <PiChefHatLight />, title: "Expert Chefs", desc: "Enjoy delicious meals crafted by expert chefs with care.", color: "" },
      ];


  return (
    <div className="container mt-2 text-center">
      <div className="row">
        <section>
          <header className="justify-content-center align-items-center">
            <h3>Our Features</h3>
            <hr className="text-end w-auto m-auto fs-bold" style={{ maxWidth: "100px" }} />
          </header>

          <div className="d-flex flex-wrap justify-content-center mt-4 gap-5 features">
            {features.map((feature, index) => (
              <section key={index} className="d-flex flex-column align-items-center text-center p-3 shadow-sm rounded" style={{ width: "200px", minHeight: "180px" }}>
                <span className={`fs-2 ${feature.color}`}>{feature.icon}</span>
                <h6 className="mt-2">{feature.title}</h6>
                <p className="mb-0">{feature.desc}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
