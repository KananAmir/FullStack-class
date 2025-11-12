import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from "@mui/material/CardContent";

function Favorites() {
    const { favorites, toggleFavorite } = useContext(FavoriteContext);
    return (
        <div>

            <h2 className="text-2xl font-bold mb-4">
                Your Favorites
            </h2>


            {favorites.length === 0 ? (
                <p className="text-red-500">You have no favorite items yet.</p>
            ) : (
                 <Grid container spacing={2} margin={"20px 0"}>
                {favorites.map((p) => {
                    return (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={p.id}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardActionArea
                                >
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
                                    <IconButton aria-label="add to favorites" onClick={() => toggleFavorite(p)}>
                                        {/* <FavoriteIcon className='text-red-500'/> */}
                                        <FavoriteIcon
                                            className={'text-red-500'}
                                        />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            )}
        </div>
    )
}

export default Favorites