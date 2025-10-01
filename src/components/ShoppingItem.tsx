import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useCartContext } from "../context/CartContext";
import Box from "@mui/material/Box";

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
          sx={{ objectFit: "contain" , height:300 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            brand :{brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            price :${price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            number :{quantity(id)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box
           sx={{ display: "flex", gap: 1 }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#f6f6f6ff",
                "&:hover": { backgroundColor: "#d6d9dcff" },
                color: "#343a40",
                borderColor: "#343a40",
              }}
              onClick={() => {
                removeFromCart(id);
              }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#f6f6f6ff",
                "&:hover": { backgroundColor: "#d6d9dcff" },
                color: "#343a40",
                borderColor: "#343a40",
              }}
              size="small"
              onClick={() => {
                increaseQuantity(id);
              }}
            >
              +
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: "#f6f6f6ff",
                "&:hover": { backgroundColor: "#d6d9dcff" },
                color: "#343a40",
                borderColor: "#343a40",
              }}
              size="small"
              onClick={() => {
                decreaseQuantity(id);
              }}
            >
              -
            </Button>
          </Box>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ShoppingItem;
