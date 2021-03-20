import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Headline = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 96px;
    color: var(--title);
`;

export const Subtitle = styled.p`
    font-weight: normal;
    font-size: 24px;
    color: var(--subtitle);
`;

export const RandomPokemon = styled.img`
    height: 340px;
`;

export const MiddleLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SpanTitle = styled.span`
    font-weight: normal;
    font-size: 18px;
    color: var(--span);
`;

export const InputSearch = styled.input`
    width: 550px;
    padding: 15px;
    border-radius: 50px;
    color: var(--text-input);
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    outline: none;
    border: none;
    background-color: var(--background-input);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
`;

export const LastLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SpanText = styled.span`
    margin-right: 3px;
`;

export const BoldText = styled.a.attrs({
    href: "https://github.com/miguelrisquelme",
})`
    font-weight: bold;
`;
