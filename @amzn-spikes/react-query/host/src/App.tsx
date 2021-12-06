import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <div className="container">
   <div>Hey, I'm from the host!</div>
  </div>
);
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>, 
  document.getElementById("app")
);
