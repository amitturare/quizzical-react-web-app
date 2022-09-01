import { useContext, useEffect, useState } from "react";

import Loader from "../../components/loader/loader.component";
import Question from "../../components/question/question.component";

import { LoaderContext } from "../../contexts/loader.context";
import { QuizConfigContext } from "../../contexts/quizConfig.context";

import "./quiz.styles.css";

//* Helper function to make a new array with object having shuffled options
const newQuestionsArray = (fetchedQuizData) =>
    fetchedQuizData.map((item) => {
        const { incorrect_answers, correct_answer, question } = item;

        const optionsArr = [...incorrect_answers, correct_answer].sort(
            (a, b) => 0.5 - Math.random()
        );

        return {
            question: question,
            options: optionsArr,
            correctAns: correct_answer,
        };
    });

const Quiz = () => {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { name, categoryID, difficulty } = useContext(QuizConfigContext);

    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const quiz = await fetch(
                    `https://opentdb.com/api.php?amount=5&category=${categoryID}&difficulty=${difficulty}&type=multiple`
                );
                const quizData = await quiz.json();
                setQuizData(quizData.results);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const questions = newQuestionsArray(quizData);

    return (
        <div>
            {isLoading && <Loader />}
            {questions.map((questionObject, i) => {
                return (
                    <Question
                        key={questionObject.question}
                        questionObject={questionObject}
                    />
                );
            })}
        </div>
    );
};

export default Quiz;
