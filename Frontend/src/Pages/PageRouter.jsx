import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function PageRouter(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={LoginPage} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
