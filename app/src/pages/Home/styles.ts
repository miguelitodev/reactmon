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

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 96px;
    color: var(--title);

    @media (max-width: 1024px) {
        font-weight: bold;
        font-size: 56px;
        color: var(--title);
    }
`;

export const Subtitle = styled.p`
    font-weight: normal;
    font-size: 24px;
    color: var(--subtitle);

    @media (max-width: 1024px) {
        font-weight: normal;
        font-size: 14px;
        color: var(--subtitle);
    }
`;

export const RandomPokemon = styled.img`
    height: 340px;
    @media (max-width: 1024px) {
        height: 340px;
        margin-top: 15px;
    }
`;

export const MiddleLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonGo = styled.button`
    border: none;
    padding: 15px;
    border-radius: 5px;
    background-color: var(--light-green);
    color: var(--white);
    opacity: 0.85;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
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
