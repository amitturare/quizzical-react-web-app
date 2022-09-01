import "./question.styles.css";

const Question = ({ questionObject }) => {
    const { question, options, correctAns } = questionObject;

    return (
        <div className="question-container">
            <p className="question">{question}</p>

            <div className="options-container">
                {options.map((option) => (
                    <li key={option}>
                        <button className="option">{option}</button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Question;
