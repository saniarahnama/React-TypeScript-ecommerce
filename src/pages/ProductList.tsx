import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Carde from "../components/Carde";
import produtsInfo from "../data/Products.json";
import { product } from "../interfaces/product";

const ProductList = () => {
  const products: product[] = produtsInfo;

  return (
    <Container sx={{ py: 4 }}>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <Carde
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

export default ProductList;
