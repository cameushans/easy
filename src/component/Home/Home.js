import React from "react"
import Card from "../Card/Card"
import {Grid} from "@material-ui/core"



const Home = (props)  => {

const nom = props.name.map((el,i) => {
    if(i <10){
            return <Card nom = {el.name} image= {el.flag.svgFile} key={i} revers={props.reverse} pop={el.population}/>
    }
})

  return (
    <Grid container style={{marginTop:"6%"}} justify="space-around">
        {nom}
    </Grid>
  );
}

export default Home;
