import produtsInfo from "../data/Products.json";
import { product } from "../interfaces/product";
import Carde from "../components/Carde";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const Mens = () => {
  const products: product[] = produtsInfo;

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products
          .filter((product) => product.category === "men")
          .map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex", 
              }}
            >
              <Carde
                key={product.id}
                id={product.id}
                image={product.image}
                brand={product.brand}
                price={product.price}
                discription={product.discription}
                category={product.category}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Mens;
