import styled from "styled-components";

export const QuestionContainer = styled.div`
    padding: 1.75rem 2rem;
    border-bottom: 2px solid #dbdef0;
`;

export const QuestionText = styled.p`
    color: #293264;
    font-family: "Karla" sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 19px;
    margin-bottom: 1rem;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`;
