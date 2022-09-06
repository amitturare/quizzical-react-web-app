import { useState, useEffect, useContext } from "react";

import Loader from "../../components/loader/loader.component";
import StartForm from "../../components/start-form/start-form.component";

import { LoaderContext } from "../../contexts/loader.context";
import { QuizConfigContext } from "../../contexts/quizConfig.context";

import { StartPageContainer, Title } from "./starting.styles";

const Starting = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { setCheckAnswersStatus } = useContext(QuizConfigContext);

    // * To get categoriesList
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const resp = await fetch(
                    "https://opentdb.com/api_category.php"
                );
                const categories = await resp.json();

                setCategoriesList(categories.trivia_categories);
                setIsLoading(false);
                setCheckAnswersStatus(false);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <StartPageContainer>
            {isLoading && <Loader />}
            <Title>
                <h1>Quizzical</h1>
                <p>Have fun with trivia questions!</p>
            </Title>

            <StartForm categoriesList={categoriesList} />
        </StartPageContainer>
    );
};

export default Starting;
