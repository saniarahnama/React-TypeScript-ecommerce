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
import Box from "@mui/material/Box";

const ProdoctInfo = () => {
  const products: product[] = produtsInfo;
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart } = useCartContext();

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle, rgba(226, 234, 234, 1) 0%, rgba(214, 217, 223, 1) 50%, rgba(166,189,189,1) 100%)",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          boxShadow: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt={product.brand}
          image={product.image}
          sx={{
            height: 300,
            objectFit: "contain",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #eee",
          }}
        />

        <CardContent>
          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            gutterBottom
          >
            {product.brand}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.discription}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
          <Button
            variant="contained"
            onClick={() => addToCart(product)}
            sx={{
              borderRadius: 2,
              px: 3,
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#bebbbbff",
              "&:hover": { backgroundColor: "#d6d9dcff" },
              color: "#1e1f21ff",
              borderColor: "#343a40",
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProdoctInfo;
