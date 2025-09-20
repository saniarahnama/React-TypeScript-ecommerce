import { useParams } from "react-router-dom";
import produtsInfo from "../data/Products.json";
import { product } from "../interfaces/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCartContext } from "../context/CartContext";

const ProdoctInfo = () => {
  const products: product[] = produtsInfo;
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart } = useCartContext();

  if (!product) return <p>product dosent find</p>;

  

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card sx={{ maxWidth: 440 }}>
        <CardMedia
          component="img"
          alt="clothes"
          sx={{ objectFit: "contain" }}
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.discription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProdoctInfo;
