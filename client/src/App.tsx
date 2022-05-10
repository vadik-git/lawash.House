import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import './style/index.css'
import { NavBar } from "./components";
import Navigation from "./navigation";

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBar/>
        <Navigation/>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App;
