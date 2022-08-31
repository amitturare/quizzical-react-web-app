import styled from "styled-components";

export const LoaderContainer = styled.div`
    width: 88px;
    height: 88px;
    display: inline-block;
    overflow: hidden;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: var(--background-color);

    display: grid;
    place-items: center;
`;
