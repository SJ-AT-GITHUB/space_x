import React from 'react';
import { LaunchList } from '../src/Scene';
import './app.css';
import {
    Route,
} from "react-router-dom";

const App = () => (
    <Route path="/">
        <LaunchList />
    </Route>
);

export default App;
