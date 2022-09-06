import { useContext } from "react";
import { decode } from "html-entities";

import QuizButton from "../quiz-button/quiz-button.component";

import { QuizConfigContext } from "../../contexts/quizConfig.context";

import {
    QuestionContainer,
    QuestionText,
    OptionsContainer,
} from "./question.styles";

const Question = ({ questionObject, id }) => {
    const { questionText, options } = questionObject;

    const { setSelectedOptions, checkAnswersStatus } =
        useContext(QuizConfigContext);

    //* Select options and store their values
    const onOptionBtnHandler = (e) => {
        const optionsContainer = e.target.parentElement;
        const questionId = optionsContainer.parentElement.children[0].id;
        const optionsArr = Array.from(optionsContainer.children);

        if (!checkAnswersStatus) {
            optionsArr.forEach((option) => option.classList.remove("selected"));
            e.target.classList.add("selected");

            setSelectedOptions((prev) => ({
                ...prev,
                [questionId]: optionsArr,
            }));
        }
    };

    return (
        <QuestionContainer>
            <QuestionText id={id}>{decode(questionText)}</QuestionText>

            <OptionsContainer>
                {options.map((option) => {
                    return (
                        <QuizButton
                            onClick={onOptionBtnHandler}
                            buttonType="base"
                            key={option}
                        >
                            {decode(option)}
                        </QuizButton>
                    );
                })}
            </OptionsContainer>
        </QuestionContainer>
    );
};

export default Question;
