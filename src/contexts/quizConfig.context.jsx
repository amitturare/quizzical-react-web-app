import { useState, createContext } from "react";

export const QuizConfigContext = createContext({
    name: "",
    categories: "",
    difficulty: "",

    selectedOptions: {},
    checkAnswersStatus: false,

    setName: () => {},
    setCategoryID: () => {},
    setDifficulty: () => {},

    setSelectedOptions: () => {},
    setCheckAnswersStatus: () => {},
});

export const QuizConfigProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [selectedOptions, setSelectedOptions] = useState({});
    const [checkAnswersStatus, setCheckAnswersStatus] = useState(false);

    const value = {
        name,
        categoryID,
        difficulty,

        selectedOptions,
        checkAnswersStatus,

        setName,
        setCategoryID,
        setDifficulty,

        setSelectedOptions,
        setCheckAnswersStatus,
    };

    return (
        <QuizConfigContext.Provider value={value}>
            {children}
        </QuizConfigContext.Provider>
    );
};
