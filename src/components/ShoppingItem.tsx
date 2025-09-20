import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useCartContext } from "../context/CartContext";
interface ShoppingItemProps {
  id: number;
  image: string;
  brand: string;
  price: number;
  quantity: (id: number) => number;
}
const ShoppingItem = ({
  id,
  image,
  brand,
  price,
  quantity,
}: ShoppingItemProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            brand :{brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            price :{price}
            <AttachMoneyIcon />
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            number :{quantity(id)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            Delete
          </Button>
          <Button
            size="small"
            onClick={() => {
              increaseQuantity(id);
            }}
          >
            +
          </Button>
          <Button
            size="small"
            onClick={() => {
              decreaseQuantity(id);
            }}
          >
            -
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ShoppingItem;
