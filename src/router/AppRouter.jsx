import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Post, PostDetails} from "../components";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="post" element={<Post />}></Route>
                <Route path="detalles/:id" element={<PostDetails />}></Route>

                <Route path="/" element={<Navigate  to="/post" />}></Route>
            </Routes>
        </>
    )
}