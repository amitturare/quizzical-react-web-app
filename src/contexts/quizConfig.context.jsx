import { useState, createContext } from "react";

export const QuizConfigContext = createContext({
    name: "",
    categories: "",
    difficulty: "",

    setName: () => {},
    setCategories: () => {},
    setDifficulty: () => {},
});

export const QuizConfigProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const value = {
        name,
        categories,
        difficulty,
        setName,
        setCategories,
        setDifficulty,
    };

    return (
        <QuizConfigContext.Provider value={value}>
            {children}
        </QuizConfigContext.Provider>
    );
};
