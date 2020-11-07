import React from 'react';
import { LaunchList } from '../src/Scene';
import './app.css';
import { Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const App = () => (
    <ReduxProvider store={configureStore({filter: {}, data: []})}>
        <Route path="/">
            <LaunchList />
        </Route>
    </ReduxProvider>
);

export default App;
