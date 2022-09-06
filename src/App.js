import { Routes, Route } from "react-router-dom";

import Starting from "./routes/starting/starting.page";
import Quiz from "./routes/quiz/quiz.page";
// import Footer from "./components/footer/footer.component";

import { ReactComponent as BlueBlob } from "./assets/blue-blob.svg";
import { ReactComponent as YellowBlob } from "./assets/yellow-blob.svg";

import "./App.css";

// TODO:
// 1. Add loader and make it smooth
// 2. Make footer
// 3. Add animations
// 4. Disable back button when clicked on checked answers

const App = () => {
    return (
        <div className="app">
            <BlueBlob className="blue-blob" />
            <YellowBlob className="yellow-blob" />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Starting />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
