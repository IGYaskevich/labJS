import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {MainLayout} from "./components/MainLayout";
import {Router} from "./routes/Routes";
import {store} from "./store/configureStore";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainLayout>
                    <Router />
                </MainLayout>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
  document.getElementById('root')
);


