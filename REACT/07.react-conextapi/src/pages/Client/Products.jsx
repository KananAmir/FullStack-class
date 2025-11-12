import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import { FavoriteContext } from "../../context/FavoriteContext";

const Products = () => {
  const [products, setProducts] = useState([])
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  console.log(favorites);
  
  const getData = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>Our Products</h2>
      <p>Discover our wide range of products designed to meet your needs.</p>


      <Grid container spacing={2} margin={"20px 0"}>
        {products.map((p) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={p.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={p.image}
                    alt={p.title}
                    sx={{ objectFit: 'contain', height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      ${p.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton aria-label="add to favorites" onClick={()=> toggleFavorite(p)}>
                    {/* <FavoriteIcon className='text-red-500'/> */}
                    <FavoriteIcon 
                      className={favorites.find(fav => fav.id === p.id) ? 'text-red-500' : 'text-gray-400'}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Products