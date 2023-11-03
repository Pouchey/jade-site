import React from "react";
import AddSong from "./add-song";
import SelectSong from "./select-song";
import { StyledContainer } from "./style";
import Form from "./form";

const Content = React.memo(() => {

    return (
        <StyledContainer>
            <AddSong />
            <SelectSong />
            <Form />
        </StyledContainer>
    );
});

export default Content;