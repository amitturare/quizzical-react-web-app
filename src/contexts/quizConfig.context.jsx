import { useState, createContext } from "react";

export const QuizConfigContext = createContext({
    name: "",
    categories: "",
    difficulty: "",

    setName: () => {},
    setCategoryID: () => {},
    setDifficulty: () => {},
});

export const QuizConfigProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const value = {
        name,
        categoryID,
        difficulty,
        setName,
        setCategoryID,
        setDifficulty,
    };

    return (
        <QuizConfigContext.Provider value={value}>
            {children}
        </QuizConfigContext.Provider>
    );
};
