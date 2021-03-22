import React from "react";

import { Header, TitleHead, Options, Option, Text } from "./styles";

const HeaderMenu = () => {
    return (
        <Header>
            <TitleHead>Reactmon</TitleHead>
            <Options>
                <Option>
                    <Text>Sobre</Text>
                </Option>
            </Options>
        </Header>
    );
};

export default HeaderMenu;
