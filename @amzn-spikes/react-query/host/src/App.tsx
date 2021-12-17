import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import QueryConsumer from 'remote/QueryConsumer';

import "./index.css";

const queryClient = new QueryClient();

const App = () => {

  const { data, isLoading, isError, error} = useQuery(
    'todos', 
    async () => fetch('https://jsonplaceholder.typicode.com/posts/1').then(jsonBlob => jsonBlob.json())
  )

  if (isLoading) return <h3 className="loading">Loading Todos</h3>;

  if (isError) return <h3 className="error">{error}</h3>;

  if (data) console.log('query data - ' + JSON.stringify(data));

  return (
    <div className="container">
      <div className="host-text">Hey, I'm from the host!</div>
      <QueryConsumer />
    </div>
  )
};

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>, 
  document.getElementById("app")
);
