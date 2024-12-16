
import RestaurantLocations from "../Home/component/RestaurantLocations";
import Header from "../../component/Header/Header";
import MenuGrid from "./components/menuFood";
const Menu = () => {
  return (
    <div>
      <Header />
      <MenuGrid />
      <RestaurantLocations />
    </div>
  );
};
export default Menu;
