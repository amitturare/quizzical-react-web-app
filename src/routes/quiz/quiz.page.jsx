import { useContext } from "react";

import { QuizConfigContext } from "../../contexts/quizConfig.context";

import "./quiz.styles.css";

const Quiz = () => {
    const { name, categories, difficulty } = useContext(QuizConfigContext);

    return (
        <div>
            <h1>
                {name}, {categories}, {difficulty}
            </h1>
        </div>
    );
};

export default Quiz;
