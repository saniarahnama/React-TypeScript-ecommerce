import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {product} from "../interfaces/product"
import { useNavigate } from 'react-router-dom';


const Carde: React.FC<product> = ({image , brand , price ,discription,id }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/product/${id}`)}>
        <CardMedia
          component="img"
          sx={{ objectFit: 'contain' }}
          image={image}
          alt="clothes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price} 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {discription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Carde;