import styled from "@emotion/styled";
import { Box, Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ acc, setAcc }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logout = () => {
        setAcc('');
    }

    return (
        <>
            <Box onClick={handleClick} style={{ cursor: 'pointer' }}>
                <Typography>{acc}</Typography>
            </Box>
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logout(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Logout>
                        Log out
                    </Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile;