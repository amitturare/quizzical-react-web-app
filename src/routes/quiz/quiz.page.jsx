import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/loader/loader.component";
import Question from "../../components/question/question.component";
import Button from "../../components/button/button.component";

import { LoaderContext } from "../../contexts/loader.context";
import { QuizConfigContext } from "../../contexts/quizConfig.context";

import { QuizPageContainer, CheckResultsContainer } from "./quiz.styles";

//* Helper function to make a new array with object having shuffled options
const newQuestionsObject = (fetchedQuizData) =>
    fetchedQuizData.map((item) => {
        const { incorrect_answers, correct_answer, question } = item;

        const optionsArr = [...incorrect_answers, correct_answer].sort(
            (a, b) => 0.5 - Math.random()
        );
        const options = [];
        optionsArr.forEach((option) =>
            options.push({
                optionText: option,
                isCorrect: option === correct_answer,
            })
        );

        return {
            questionText: question,
            options: options,
        };
    });

const Quiz = () => {
    const navigate = useNavigate();

    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { name, categoryID, difficulty } = useContext(QuizConfigContext);

    const [quizData, setQuizData] = useState([]);

    //* To get quiz data
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
    const questions = newQuestionsObject(quizData);

    //* Back Button
    const onBackBtnHandler = () => {
        navigate("/");
    };

    return (
        <QuizPageContainer>
            {isLoading && <Loader />}
            <div>
                <Button buttonType="back" onClick={onBackBtnHandler}>
                    ↩ Back
                </Button>
                {questions.map((questionObject, i) => {
                    return (
                        <Question
                            key={questionObject.questionText}
                            questionObject={questionObject}
                        />
                    );
                })}
            </div>
            <CheckResultsContainer>
                <Button buttonType="base">Check answers</Button>
            </CheckResultsContainer>
        </QuizPageContainer>
    );
};

export default Quiz;
