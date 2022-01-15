import styles from "./Menu.module.css";
import Category from "./Category";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import SportsIcon from "@mui/icons-material/Sports";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import CribIcon from "@mui/icons-material/Crib";
import EarbudsBatteryIcon from "@mui/icons-material/EarbudsBattery";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ToysIcon from "@mui/icons-material/Toys";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

function Menu() {
  const DUMMY_CATEGORIES = [
    { name: "men", icon: ManIcon },
    { name: "Women", icon: WomanIcon },
    { name: "Sport", icon: SportsIcon },
    { name: "Electronics", icon: DevicesOtherIcon },
    { name: "children", icon: CribIcon },
    { name: "accessories", icon: EarbudsBatteryIcon },
    { name: "gifts", icon: CardGiftcardIcon },
    { name: "Toys", icon: ToysIcon },
    { name: "VideoGames", icon: SportsEsportsIcon },
  ];

  return (
    <div className={styles.list}>
      <h4>Cathegories</h4>
      {/** fetch cathegories from database */}
      {DUMMY_CATEGORIES.map((category) => {
        return (
          <Category
            key={category.name}
            name={category.name}
            Icon={category.icon}
          />
        );
      })}
    </div>
  );
}
export default Menu;
