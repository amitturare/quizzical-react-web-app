import styled from "styled-components";

export const StartingPageFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    text-align: center;

    h1 {
        font-size: 3rem;
        font-family: "Karla", sans-serif;
        font-weight: bold;
        margin-bottom: 5px;
    }
    p {
        font-size: 1rem;
        font-family: "Inter", sans-serif;
    }
`;
