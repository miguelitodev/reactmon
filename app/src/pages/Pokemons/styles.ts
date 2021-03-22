import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
`;

export const SpanTitle = styled.span`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const InputSearch = styled.input`
    width: 550px;
    padding: 12px 30px;
    border-radius: 50px;
    color: var(--text-input);
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: var(--background-input);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
`;
