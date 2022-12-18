import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Component from './Component';
import Intro from './Intro';
import { QuestionsProvider } from './Context/QuestionsContext';

import * as data from './JSON-React Assignment.json';
import Question from './Questions/Question';


const App = () => {
    return (
        <QuestionsProvider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />}>
                        <Route path="questions" element={<Component />} />
                        <Route path="question" element={<Question />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QuestionsProvider>
    )
}

export default App;