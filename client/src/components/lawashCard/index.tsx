import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { RiShoppingBasketLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

export const LawashCard = ({lawash, changeMode}: any) => {
  const navigate = useNavigate();
  const { title, price, ingredients, size, date, image} = lawash;

  const handleChangeLawashCard = () => {
    navigate(`../createLawash/${lawash._id}`);
  }
  return (
    <Card sx={{ 
      maxWidth: '30%',
      padding: '10px 30px',
      margin: '20px',
      backgroundColor: '#ffffff'
    }}>
      <CardHeader
        title={title}
        subheader={`${new Date(date)}`}
      />
      <CardMedia
        component="img"
        height="200"
        image={image.base64}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}uah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {size}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:'flex', justifyContent: 'space-between'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {changeMode && <Button onClick={handleChangeLawashCard}>Изменить</Button>}
        <Button><RiShoppingBasketLine/>в корзину</Button>
      </CardActions>
    </Card>
  );
}
