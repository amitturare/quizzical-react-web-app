// import { useState } from "react";
import { decode } from "html-entities";

import Button from "../button/button.component";

import {
    QuestionContainer,
    QuestionText,
    OptionsContainer,
} from "./question.styles";

const Question = ({ questionObject }) => {
    const { questionText, options } = questionObject;
    // const { score, setScore } = useState(0);

    return (
        <QuestionContainer>
            <QuestionText>{decode(questionText)}</QuestionText>

            <OptionsContainer>
                {options.map((option) => {
                    return (
                        <Button
                            buttonType="quiz"
                            key={option.optionText}
                            option={option}
                        >
                            {decode(option.optionText)}
                        </Button>
                    );
                })}
            </OptionsContainer>
        </QuestionContainer>
    );
};

export default Question;
