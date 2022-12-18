import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Component from "./Component";

const Intro = () => {
    return (
        <div>
            <Link to="/questions">Start the Exam</Link>

            <Routes>
                <Route exact path="/questions" element={<Component />} />
            </Routes>
        </div>

    )
}

export default Intro;