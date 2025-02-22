import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import AddRestaurant from '../pages/RestaurantManagement/Add__Restaruants';
import Restaurants from '../pages/RestaurantManagement/Restaurants';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> }, // Home Page
      { path: 'addrestaurants', element: <AddRestaurant /> }, // Add Restaurants Page
      { path: 'restaurants', element: <Restaurants /> }, // Restaurants Listing Page
      { path: 'categories/:categoryName', element: <></> }, // Dynamic Category Page
      { path: 'about', element: <About /> }, // About Page
      { path: 'search', element: <></> }, // Search Page
      { path: 'user', element: <></> }, // User Profile Page
      { path: 'cart', element: <></> }, // Shopping Cart Page
    ],
  },
]);

export default router;
