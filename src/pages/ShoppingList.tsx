
import ShoppingItem from "../components/ShoppingItem";
import { useCartContext } from "../context/CartContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const ShoppingList = () => {
  
  const { cart, getQuantityById, totalPrice } = useCartContext();
  const handleClick = () => {
    <Alert severity="success">Happy new Clothes</Alert>;
    alert('Happy new Clothes');
    
  };
  return (
    <>
      {cart.map((p) => {
        return (
          <ShoppingItem
            key={p.id}
            id={p.id}
            image={p.image}
            quantity={getQuantityById}
            brand={p.brand}
            price={p.price}
          />
        );
      })}
      <Typography variant="h1" component="h2">
        tootal price :{totalPrice}
      </Typography>
      <Button variant="outlined" onClick={handleClick}>
        pay
      </Button>
    </>
  );
};

export default ShoppingList;
