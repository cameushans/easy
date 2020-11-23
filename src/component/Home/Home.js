import React from "react"
import Card from "../Card/Card"
import {Grid, Typography} from "@material-ui/core"
import { useStyles } from "../Home/Home.style"


const Home = (props)  => {



const classes = useStyles()
const nom = props.country.map((element,i) => {
            return <Card
            nom = {element.name}
            image= {element.flag.svgFile} 
            key={i} 
            pop={element.population}
            capital={element.capital}
            demonym={element.demonym}
            id={element._id}
             />

})



  return (
   <div className={classes.div}>
        <Typography className={classes.titre} variant="h3" >The World is Yours</Typography>
        <Grid container className={classes.Gridmargin} justify="space-around">
            {nom}
        </Grid>
    </div>
  );
}

export default Home;