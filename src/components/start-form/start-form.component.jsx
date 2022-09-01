import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";

import { QuizConfigContext } from "../../contexts/quizConfig.context";

import {
    Group,
    Input,
    FormInputLabel,
    SelectElement,
    ButtonContainer,
} from "./start-form.styles";

const StartForm = ({ categoriesList }) => {
    const navigate = useNavigate();
    const { setName, setCategoryID, setDifficulty } =
        useContext(QuizConfigContext);

    // * To handle change
    const [formData, setFormData] = useState({
        name: "",
        categories: "",
        difficulty: "",
    });
    const onChangeHandler = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setFormData((prevFormDate) => ({
            ...prevFormDate,
            [name]: value,
        }));
    };

    // * To handle submit
    const onSubmitHandler = (e) => {
        e.preventDefault();

        setName(formData.name);
        setCategoryID(formData.categories);
        setDifficulty(formData.difficulty);

        navigate("/quiz");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Group>
                <Input
                    required
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={formData.name}
                    autoComplete="off"
                />
                <FormInputLabel shrink={formData.name.length} htmlFor="name">
                    Name
                </FormInputLabel>
            </Group>

            <Group>
                <SelectElement
                    required
                    name="categories"
                    onChange={onChangeHandler}
                    value={formData.categories}
                >
                    <option value="" default></option>
                    {categoriesList.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </SelectElement>
                <FormInputLabel
                    shrink={formData.categories.length}
                    htmlFor="categories"
                >
                    Select Category
                </FormInputLabel>
            </Group>

            <Group>
                <SelectElement
                    required
                    name="difficulty"
                    onChange={onChangeHandler}
                    value={formData.difficulty}
                >
                    <option value="" default></option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </SelectElement>
                <FormInputLabel
                    shrink={formData.difficulty.length}
                    htmlFor="difficulty"
                >
                    Select Difficulty
                </FormInputLabel>
            </Group>

            <ButtonContainer>
                <Button type="submit">Test Your Knowledge →</Button>
            </ButtonContainer>
        </form>
    );
};

export default StartForm;
