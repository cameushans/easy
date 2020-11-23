import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache ,ApolloProvider} from '@apollo/client';
import { HttpLink } from '@apollo/client';




const link = new HttpLink({ uri: 'https://countries-274616.ew.r.appspot.com/'})
const cache =  new InMemoryCache();//caching data after queries
const client = new ApolloClient({//instance a new client to perform my queries and passing some options
  link,
  cache:cache
});
    



ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
         <ApolloProvider client={client}>
                <App />
         </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
