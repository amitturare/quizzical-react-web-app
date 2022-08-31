import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { LoaderProvider } from "./contexts/loader.context";
import { QuizConfigProvider } from "./contexts/quizConfig.context";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    // <React.StrictMode>
    // </React.StrictMode>
    <BrowserRouter>
        <QuizConfigProvider>
            <LoaderProvider>
                <App />
            </LoaderProvider>
        </QuizConfigProvider>
    </BrowserRouter>
);
