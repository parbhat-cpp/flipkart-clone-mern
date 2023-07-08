import styled from "@emotion/styled";
import { Box, Button, ButtonGroup } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`

function GroupedButton() {
    return (
        <Component>
            <StyledButton>
                -
            </StyledButton>
            <Button disabled>
                1
            </Button>
            <StyledButton>
                +
            </StyledButton>
        </Component>
    )
}

export default GroupedButton;