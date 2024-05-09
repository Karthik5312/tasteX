import { MenuItem as MenuItemType } from "../types"; // Renamed the imported MenuItem type
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType; // Use the renamed MenuItem type
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => { // Renamed the component to MenuItemComponent
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
      ₹{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItemComponent; // Export the renamed component
