import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"
import {Grid} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();


  return (
      <Grid item lg={4}  style={{marginTop:"3%"}} >
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={props.nom}
                    height="140"
                    image={props.image}
                    title={props.nom}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nom}
                    </Typography>
                
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to="/more">
                        <Button size="small" variant="contained" color="primary" onClick={()=>props.revers(props.nom,props.image,props.pop)}>
                            En savoir plus
                        </Button>
                    </Link>
                
                </CardActions>
                </Card>
    </Grid>
  );
}
