import styled from "styled-components";

export const BaseButton = styled.button`
    width: 200px
    height: 50px;
    color: #fff;
    padding: 15px 25px;l
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    border-radius: 15px;
    border: 2px solid #4d5b9e;
    background: #4d5b9e;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;


    &:hover {
        filter: brightness(110%) saturate(110%);
    }
    &:active {
        transform: translateY(5px);
    }
`;

export const TwitterButton = styled(BaseButton)`
    border: 2px solid #1da1f2;
    background: #1da1f2;
`;

export const QuizButton = styled(BaseButton)`
    padding: 5px 10px;
    font-size: 14px;
    color: #293264;
    background: transparent;
    border: 1px solid #4d5b9e;
    border-radius: 8px;

    &:hover {
        background: #d6dbf5;
    }
`;

export const BackButton = styled(QuizButton)``;
