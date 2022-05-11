import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavBar } from "./components";
import Navigation from "./navigation";
import './style/index.css';

const queryClient = new QueryClient();

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
