import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";

import Loader from "../../components/loader/loader.component";
import Question from "../../components/question/question.component";
import Button from "../../components/button/button.component";

import { LoaderContext } from "../../contexts/loader.context";
import { QuizConfigContext } from "../../contexts/quizConfig.context";

import { QuizPageContainer, CheckResultsContainer } from "./quiz.styles";

//* Helper function to make a new array with object having shuffled options
const newQuestionsObject = (fetchedQuizData) => {
    const resultantArr = fetchedQuizData.map((item, i) => {
        const { incorrect_answers, correct_answer, question } = item;

        const optionsArr = [...incorrect_answers, correct_answer].sort(
            (a, b) => 0.5 - Math.random()
        );

        return {
            id: i,
            questionText: question,
            options: optionsArr,
            correctAns: correct_answer,
        };
    });
    return resultantArr;
};

const Quiz = () => {
    const navigate = useNavigate();

    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const {
        name,
        categoryID,
        difficulty,
        selectedOptions,
        setSelectedOptions,
        checkAnswersStatus,
        setCheckAnswersStatus,
    } = useContext(QuizConfigContext);
    const [quizData, setQuizData] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    //* To get quiz data
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const quiz = await fetch(
                    `https://opentdb.com/api.php?amount=5&category=${categoryID}&difficulty=${difficulty}&type=multiple`
                );
                const quizData = await quiz.json();
                setQuizData(newQuestionsObject(quizData.results));
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    //* Back Button
    const onBackBtnHandler = () => {
        setCheckAnswersStatus(false);
        setSelectedOptions({});
        navigate("/");
    };

    //* Handle check answers button
    const onCheckAnswersBtnHandler = () => {
        if (!selectedOptions) return;

        const questionsAnswered = Object.keys(selectedOptions);

        // First, make all the options disabled
        if (
            questionsAnswered.length === quizData.length &&
            checkAnswersStatus === false
        ) {
            setCheckAnswersStatus(true);

            // Add grayed styling to all the quiz buttons
            questionsAnswered.forEach((question) => {
                const quizButtons = selectedOptions[question];
                quizButtons.forEach((button) => {
                    button.classList.add("grayed");
                    button.classList.remove("hover");
                    button.classList.remove("active");
                });
            });

            // Get the selected options
            // questionU: the actions done by the user,
            questionsAnswered.forEach((questionU, i) => {
                const selectedOption = selectedOptions[questionU].filter(
                    (option) => option.classList.contains("selected")
                );
                const finalSelectedOption = selectedOption[0];
                const quizDataCurrentQuestionCorrectAns = decode(
                    quizData[i].correctAns
                );

                if (
                    finalSelectedOption.innerHTML ===
                    quizDataCurrentQuestionCorrectAns
                ) {
                    finalSelectedOption.classList.add("correct");
                    finalSelectedOption.classList.remove("wrong");
                    setTotalPoints((prevPoints) => prevPoints + 1);
                } else {
                    finalSelectedOption.classList.remove("correct");
                    finalSelectedOption.classList.add("wrong");
                }
            });
        }
    };

    const onPlayAgainBtnHandler = () => {
        setCheckAnswersStatus(false);
        setSelectedOptions({});
        navigate("/");
    };
    /* 
quizData - 
[
    {
        questionText: `...`, 
        options: [...],
        correctAns: ...,
    }, 
    ...
]
selectedOptions - 
{
    'questionText': optionsArr[
        button.base,
        button.base,
        button.base,
        button.base.selected
    ], 
    ...
}
*/

    return (
        <QuizPageContainer>
            {isLoading && <Loader />}
            <div>
                <Button buttonType="back" onClick={onBackBtnHandler}>
                    ↩ Back
                </Button>

                {quizData.map((questionObject) => {
                    return (
                        <Question
                            key={questionObject.questionText}
                            id={questionObject.id}
                            questionObject={questionObject}
                        />
                    );
                })}
            </div>
            <CheckResultsContainer>
                {!checkAnswersStatus ? (
                    <div>
                        <p>Answer all the questions and click here →</p>
                        <Button
                            buttonType="base"
                            onClick={onCheckAnswersBtnHandler}
                        >
                            Check answers
                        </Button>
                    </div>
                ) : (
                    <div>
                        <p style={{ marginRight: "1rem" }}>
                            You scored {totalPoints}/5 correct answers
                        </p>
                        <Button
                            buttonType="base"
                            onClick={onPlayAgainBtnHandler}
                        >
                            Play Again
                        </Button>
                    </div>
                )}
            </CheckResultsContainer>
        </QuizPageContainer>
    );
};

export default Quiz;
