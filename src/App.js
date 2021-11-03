import React from 'react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { useEffect, useState } from 'react';

import Header from "./components/common/Header"
import { Route } from 'react-router';
import { Landing, About, Contact } from './components'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const link = createHttpLink({
    uri: `${backendUrl}/graphql`,
    credentials: 'same-origin'
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
  return (
    <ApolloProvider client={client}>
    <main>
    <switch>
      <Header />
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={About} exact />
      <Route path="/about" component={Contact} exact />
      </switch>
    </main>
    </ApolloProvider>
  );
}

export default App;
