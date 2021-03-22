import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10px;
`;

export const TitleHead = styled.h2``;

export const Options = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Option = styled.li`
    list-style: none;
    margin-right: 15px;
`;

export const Text = styled.p`
    opacity: 0.85;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        opacity: 1;
    }
`;
