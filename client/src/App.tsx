import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Navigation from "./navigation";
import { persistor, store } from "./store";
import './style/index.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Navigation/>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
