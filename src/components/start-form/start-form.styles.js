import styled, { css } from "styled-components";

const primaryColor = "#293264";
const secondaryColor = "#4D5B9E";

const shrinkLabelStyles = css`
    top: -20px;
    font-size: 14px;
    color: ${primaryColor};
`;

export const Group = styled.div`
    width: 350px;
    position: relative;
    margin: 45px 0;
`;

export const FormInputLabel = styled.label`
    color: ${primaryColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;

    transition: 300ms ease all;
    -moz-transition: 300ms ease all;
    -webkit-transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
    background: none;
    color: ${primaryColor};
    font-size: 18px;
    padding: 10px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${secondaryColor};
    margin: 25px 0;

    &:focus {
        outline: none;
        ~ ${FormInputLabel} {
            ${shrinkLabelStyles}
        }
    }
`;

export const SelectLabel = styled(FormInputLabel)``; 
export const SelectElement = styled.select`
    background: none;
    color: ${primaryColor};
    font-size: 18px;
    padding: 10px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${secondaryColor};
    margin: 25px 0;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        outline: none;
        ~ ${SelectLabel} {
            ${shrinkLabelStyles}
        }
    }

    &:not([multiple]):not([size]) {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath id='Path_1' data-name='Path 1' d='M371,294l4,6,4-6Z' transform='translate(-371 -294)' fill='%293264'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: right 15px top 50%;
    }
`;

export const ButtonContainer = styled.div`
    display: grid;
    place-items: center;
`;
