// import { map } from "lodash";
import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import App from '../App'
import Error404 from "../page/Error404";
import Home from "../page/Home";
import User from "../page/User";
import { map } from 'lodash'
import configRouting from "./configRouting";

export default function Routing(props) {
    const { setRefreshCheckLogin } = props;
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route index element={<Home />} /> */}
            <Route path='*' element={<Error404 />} />
            <Route path='/:id' element={<User />} />
    {/* // <Router>
    //     <Switch>
    //         {map(configRouting, (route, index) => (
    //         <Route key={index} path={route.path} exact={route.exact}>
    //             <route.page setRefreshCheckLogin={setRefreshCheckLogin} />
    //         </Route>
    //         ))}
    //     </Switch>
    // </Router> */}
        </Routes>
    </BrowserRouter>
    );
}
