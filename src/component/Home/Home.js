import React from "react"
import Card from "../Card/Card"
import {Grid, Typography} from "@material-ui/core"
import { useStyles } from "../Home/Home.style"


const Home = (props)  => {


const classes = useStyles()
const nom = props.name.map((el,i) => {
  
            return <Card
            nom = {el.name}
            image= {el.flag.svgFile} 
            key={i} 
            revers={props.reverse} 
            pop={el.population}
            capital={el.capital}
            demonym={el.demonym}
            id={el._id}
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