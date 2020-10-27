import React from "react"
import {Grid} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./Details.style";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';



const Details = (props)  => {

  const classes = useStyles();

 return (
<div>
  <Grid container   justify="center" alignItems="center" className={classes.taille}>

            <Grid container item lg={4} justify="center" className={classes.gridMargin} >
                <Card >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={props.nom}
                    height="400"
                    image={props.image}
                    title={props.nom}
                    />
                </CardActionArea>
                </Card>
          </Grid>

          <Grid container  lg={6} item direction="column" alignItems="center"  >
                <Typography variant="h4" color="primary">Pays: {props.nom}</Typography>
                <Typography  variant="h4"  color="primary">Capitale : {props.capital}</Typography>
                <Typography  variant="h4"  color="primary">Habitants : {props.demonym}</Typography>
                <Typography  variant="h4"  color="primary">Population : {props.population} habitants</Typography>
         </Grid>

         <Grid item container lg={12} justify="center">
              <Link to="/ " className={classes.link}>
                <Button color="primary" variant="contained" >Liste des Pays</Button>
            </Link>
         </Grid>
       
   </Grid>
 </div>
  );
}

export default Details;
