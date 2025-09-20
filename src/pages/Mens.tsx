import produtsInfo from "../data/Products.json";
import { product } from "../interfaces/product";
import Carde from "../components/Carde";
const Mens = () => {
    const products: product[] = produtsInfo;
    
    return (
        <>
       { products.filter(product => product.category === "men").map(product => (<Carde
          key={product.id}
          id={product.id}
          image={product.image}
          brand={product.brand}
          price={product.price}
          discription={product.discription}
          category={product.category}
          
        />) )}
        </>
      );
}
 
export default Mens;