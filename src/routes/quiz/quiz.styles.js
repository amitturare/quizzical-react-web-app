import styled from "styled-components";

export const QuizPageContainer = styled.div`
    width: 60vw;
    display: grid;
    place-items: center;
    row-gap: 1.5rem;
`;

export const CheckResultsContainer = styled.div`
    div {
        display: flex;
        align-items: center;
        column-gap: 15px;

        p {
            color: #293264;
            font-family: "Karla" sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 19px;
        }
    }
`;
