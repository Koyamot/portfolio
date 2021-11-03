import React from 'react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { useEffect, useState } from 'react';

import Header from "./components/common/Header"

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
      <Header />
    </main>
    </ApolloProvider>
  );
}

export default App;
