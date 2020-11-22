import React,{useEffect,useState} from "react";
import Details from "./component/Details/Details";
import Home from "./component/Home/Home";
import {Switch,Route} from "react-router-dom";
import { ApolloClient, InMemoryCache ,ApolloProvider,gql} from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';




function App() {
//initialise my states
const [name,setName] = useState([]);
const [nom,setNom] = useState("");
const [image,setImage] = useState("");
const [popu,setPopu] = useState("");
const [capital,setCapital] = useState("");
const [demonym,setDemonym] = useState("");


const cache =  new InMemoryCache();//caching data after queries

 persistCache({
  cache,
  storage: window.localStorage,
});//persist datas in the caxhe

const client = new ApolloClient({//instance a new client to perform my queries and passing some options
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache:cache
});


console.log(client.cache)


/* *** Query Skeleton *** */
//query AllCountry is the operation name of the query
//Country (filter,filter){}
//all country takes parameter for variable
//country is for the argument
useEffect(()=>{//load datas everytimes the component is re render 
 client.query({
  query: gql`
    query AllCountry {
              Country (first:10) {
                name,
                flag{
                     svgFile
                },
                population,
                demonym,
                capital,
              }
    }
    `}).then((res)=>setName(...name,res.data.Country))
},[])


const sendData = (nom,image,pop,capital,demonym,id) =>{ //reverse data flow return datas about the selectionned country 
        setNom(nom)
        setImage(image)
        setPopu(pop)
        setCapital(capital)
        setDemonym(demonym)
}

/*  client.readQuery({   //tried to perform some queries to the cache but get null for values 
  query:  gql`
    query ReadCountry{
      Country{
        _id
      }
    }
  `
}).then((res)=>console.log(res)) */



  return (
         <ApolloProvider client={client}>

                    <Switch>

                          <Route   exact={true} path="/" >
                              <Home reverse={sendData} name={name}/>
                          </Route>

                          <Route   exact={true} path="/more" >
                              <Details 
                              nom ={nom}
                               image={image}
                               population={popu}
                               capital={capital} 
                               demonym={demonym}
                             />
                          </Route>

                  </Switch>

        </ApolloProvider>
  )
};

export default App;