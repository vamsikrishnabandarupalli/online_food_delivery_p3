import { Link } from "react-router-dom";
import biryani from "../../assets/food_images/Chicken_Biryani_Recipe_category.jpg";
import pizza from "../../assets/food_images/pizza_category.jpg";
import friedRice from "../../assets/food_images/fried_rice_category.jpg";
import burger from "../../assets/food_images/burger_category.jpg";
import dosa from "../../assets/food_images/dosa_category.jpg";
import idli from "../../assets/food_images/idli_category.jpg";
import thali from "../../assets/food_images/thali_category.jpg";
import chinese from "../../assets/food_images/chinese_category.jpg";

export default function Categories() {
  const categories = [
    { name: "Biryani", path: "Biryani", image: biryani },
    { name: "Pizza", path: "Pizza", image: pizza },
    { name: "Fried Rice", path: "Friedrice", image: friedRice },
    { name: "Burger", path: "Burger", image: burger },
    { name: "Dosa", path: "Dosa", image: dosa },
    { name: "Idli", path: "Idli", image: idli },
    { name: "Thali", path: "Thali", image: thali },
    { name: "Chinese", path: "Chinese", image: chinese },
  ];

  return (
    <div className="container mt-4">
      <div 
        className="d-flex align-items-center gap-3 px-2 py-3"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE/Edge
        }}
      >
        {categories.map(({ name, path, image }, index) => (
          <div key={index} className="text-center" style={{ minWidth: "120px" }}>
            <Link to={`/categories/${path}`} className="text-decoration-none text-dark">
              <img
                src={image}
                alt={`${name} Collection`}
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <p className="mt-2">{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
