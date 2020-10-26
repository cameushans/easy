import React,{useEffect,useState} from "react";
import Details from "./component/Details/Details";
import Home from "./component/Home/Home";
import {Switch,Route} from "react-router-dom";
import { ApolloClient, InMemoryCache ,ApolloProvider,gql} from '@apollo/client';

import './App.css';
import { separateOperations } from "graphql";

function App() {
const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache()
});

const [name,setName] = useState([])
const [nom,setNom] = useState("")
const [image,setImage] = useState("")
const [popu,setPopu] = useState("")






useEffect(()=>{
 client.query({
  query: gql`
    query Country {
              Country{
                name,
                flag{
                     svgFile
                },
                population,
                demonym,
                capital,

              }
    }
    `})
    .then((res)=>(setName(...name,res.data.Country)))
},[])


const sendDate = (nom,image,pop) =>{ 
    setNom(nom)
    setImage(image)
    setPopu(pop)
}


  return (
         <ApolloProvider client={client}>
                    <Switch>
                          <Route   exact={true} path="/" >
                              <Home reverse={sendDate} name={name}/>
                          </Route>
                          <Route   exact={true} path="/more" >
                             <Details nom ={nom} image={image} population={popu} />
                          </Route>
                  </Switch>
        </ApolloProvider>
  )
};

export default App;
