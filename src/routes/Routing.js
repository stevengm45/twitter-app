// import { map } from "lodash";
import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "../page/Error404";
import Home from "../page/Home";
import User from "../page/User";
import Users from "../page/Users";


export default function Routing(props) {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route index element={<Home />} /> */}
            <Route path='/users' element={<Users />} />
            <Route path='/:id' element={<User />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </BrowserRouter>
    );
}

