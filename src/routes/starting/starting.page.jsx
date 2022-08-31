import { useState, useEffect, useContext } from "react";

import Loader from "../../components/loader/loader.component";
import StartForm from "../../components/start-form/start-form.component";

import { LoaderContext } from "../../contexts/loader.context";

import { StartingPageFormContainer, Title } from "./starting.styles";

const Starting = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const { isLoading, setIsLoading } = useContext(LoaderContext);

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
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <StartingPageFormContainer>
            {isLoading && <Loader />}
            <Title>
                <h1>Quizzical</h1>
                <p>Have fun with trivia questions!</p>
            </Title>

            <StartForm categoriesList={categoriesList} />
        </StartingPageFormContainer>
    );
};

export default Starting;
