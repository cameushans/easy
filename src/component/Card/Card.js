import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
import { useStyles } from "../Card/card.style";


export default function ImgMediaCard(props) {
  const classes = useStyles();


  return (
      <Grid item lg={4} md={6}  xs={10} container  justify="center" className={classes.gridMargin} >

            <Card className={classes.root}>

                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={props.nom}
                    height="140"
                    image={props.image}
                    title={props.nom}
                    />
                    <CardContent  className={classes.cardBackGround}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.colorTypo}>
                        {props.nom}
                    </Typography>             
                    </CardContent>
                </CardActionArea>

                <CardActions  className={classes.cardBackGround}>
                    <Link to="/more" className={classes.link}>
                        <Button 
                        size="small" 
                        variant="contained"
                         color="primary" 
                        onClick={()=>props.revers(props.nom,props.image,props.pop,props.capital,props.demonym,props.id,  localStorage.setItem('name', props.nom)
                        )}>
                            En savoir plus
                        </Button>
                    </Link>            
                  </CardActions>

         </Card>

    </Grid>
  );
}
