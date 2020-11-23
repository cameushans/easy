import React from "react"
import {Grid} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./Details.style";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {gql} from '@apollo/client';
import { useApolloClient } from '@apollo/client';



const Details = (props)  => {
      const client = useApolloClient();
      const classes = useStyles();
      const { Country } = client.readQuery({
          query: gql`
            query AllCountry{
              Country (first:10){
                _id
                name,
                flag{
                    svgFile
                },
                population,
                demonym,
                capital,
              }
            }
          `,
    })
 
     const filteredCountry =  Country.filter( element => element._id === props.id)


     return (
              <div>
                <Grid container   justify="center" alignItems="center" className={classes.taille}>
              
                          <Grid container item lg={4} justify="center" className={classes.gridMargin} >
                              <Card >
                              <CardActionArea>
                                  <CardMedia
                                  component="img"
                                  alt=""
                                  height="400"
                                  image={filteredCountry[0].flag.svgFile}
                                  title=""
                                  />
                              </CardActionArea>
                              </Card>
                        </Grid>
              
                        <Grid container  lg={6} item direction="column" alignItems="center"  >
                              <Typography variant="h4" color="primary">Pays: {filteredCountry[0].name}</Typography>
                              <Typography  variant="h4"  color="primary">Capitale : {filteredCountry[0].capital}</Typography>
                              <Typography  variant="h4"  color="primary">Habitants : {filteredCountry[0].demonym}</Typography>
                              <Typography  variant="h4"  color="primary">Population : {filteredCountry[0].population} habitants</Typography>
                       </Grid>
              
                       <Grid item container lg={12} justify="center">
                            <Link to="/" className={classes.link}>
                              <Button color="primary" variant="contained" >Liste des Pays</Button>
                          </Link>
                       </Grid>
                     
                 </Grid>
               </div>
                );
}

export default Details;
