import React,{useState} from "react";
import Details from "./component/Details/Details";
import Home from "./component/Home/Home";
import {Switch,Route} from "react-router-dom";
import {gql} from '@apollo/client';
import { useQuery} from "@apollo/react-hooks"




function App(props) {
    const [id, setId] = useState(0)
    const ALL_COUNTRY= gql`
    query AllCountry {
              Country (first:10) {
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
    `;


      const {loading,error,data} = useQuery(ALL_COUNTRY);//take a query as argument and return an object
      //every time the state of those states change the component is rerender

      if(loading){
        return "is loading" ;
      }

      if(error){
        return error
      }


      function findId(id){ setId(id)  }

  return (

                    <Switch>
                          <Route   exact={true} path="/" >
                              <Home country ={data.Country} findId={findId} />
                          </Route>

                          <Route   exact={true} path="/more" >
                              <Details  id={id}/>
                          </Route>
                  </Switch>

  )
};

export default App;