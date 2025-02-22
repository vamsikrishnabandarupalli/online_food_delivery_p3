import Banner from '../banner/banner';
import Contact from '../contacts/contacts';
import Features from '../features/features';
import Categories from '../food_categories/categories';
import FoodCards from '../food_type/food_cards';

export default function Home() {
    return <>
      <div className="bg-light mb-2">
        <Banner />
        <FoodCards />
        <Categories/>
        <Features />
        <Contact />
      </div>
    </>;
  }
  