import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import noImage from '../assest/no-image-icon-23485.png';




export default function Shopping({index, title, image, overview}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sliceTitle = title.length > 24 ? title.slice(0, 24) : title;
  const sliceOverview = overview ? (overview.length > 30 ? overview.slice(0, 30) + '...' : overview) : 'No description available';

   

  return (
    <div className='shop-cart'>

    <Card sx={{ maxWidth: 345 }}>
      {image ?
      <CardMedia
      sx={{ height: 200 }}
      image={image}
      title="green iguana"
      />
      :
      <CardMedia
      sx={{ height: 200 }}
      image={noImage}
        title="green iguana1"
        />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {sliceTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {sliceOverview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="normal" onClick={handleClickOpen}>Learn More</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {image ?
              <img src={image} className='card-img' alt='crd-i'/>
              :
              <img src={noImage} className='card-img' alt='crd-3'/>
              
            }
          {overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
            </div>
     
  );
}