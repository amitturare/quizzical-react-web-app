import "./quiz-button.styles.css";

const getStyles = (buttonType = "base") =>
    ({
        base: "",
        selected: "selected",
        correct: "correct",
        wrong: "wrong",
        grayed: "grayed",
    }[buttonType]);

const QuizButton = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`base hover active ${getStyles(buttonType)}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default QuizButton;
