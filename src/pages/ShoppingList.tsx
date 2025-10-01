import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ShoppingItem from "../components/ShoppingItem";
import { useCartContext } from "../context/CartContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const ShoppingList = () => {
  const { cart, getQuantityById, totalPrice, clearCart } = useCartContext();
  const handleClick = () => {
    <Alert severity="success">Happy new Clothes</Alert>;

    clearCart();
    if (cart.length === 0) {
      alert("The basket is empty");
    } else {
      alert("Happy new Clothes");
    }
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: 4,
        background:
          "radial-gradient(circle, rgba(226, 234, 234, 1) 0%, rgba(214, 217, 223, 1) 50%, rgba(166,189,189,1) 100%)",
      }}
    >
      <Container>
      <Grid container spacing={4}>
        {cart.map((p) => {
          return (
            <Grid
              key={p.id}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex",
              }}
            >
              <ShoppingItem
                key={p.id}
                id={p.id}
                image={p.image}
                quantity={getQuantityById}
                brand={p.brand}
                price={p.price}
              />
            </Grid>
          );
        })}
      </Grid>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>

        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            px: 6,
            py: 1.5,
            fontSize: "1.2rem",
            backgroundColor: "#bebbbbff",
            "&:hover": { backgroundColor: "#d6d9dcff" },
            color: "#1e1f21ff",
            borderColor: "#343a40",
          }}
        >
          Pay
        </Button>
      </Box>
      </Container>
    </Box>
  );
};

export default ShoppingList;
