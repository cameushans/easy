import React from "react"
import {Grid} from "@material-ui/core"


const Details = (props)  => {




          return (
    <Grid container  justify="center">
      <Grid item lg={6}>
               <h1>{props.nom}</h1>
              <img src={props.image} />
        </Grid>
        <Grid item lg={6}>
           <h1>{props.nom}</h1> 
           <h1>Population : {props.population} habitants</h1>
          <h1>On nomme ses habitants les : </h1>
        </Grid>
    </Grid>
  );
}

export default Details;
