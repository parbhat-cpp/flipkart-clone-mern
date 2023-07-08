import styled from "@emotion/styled";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import { authenticateSignup, authenticateLogin } from "../../service/api";

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image = styled(Box)`
    background: #2780f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83%;
    width: 28%;
    padding: 45px 35px;
    & > p,h5{
        color: #fff;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, button, p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOtp = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 44px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0,0,0,0.20);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 12px;
    color: #2487f0;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6361;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here`,
        subHeading: 'Sign up with your mobile number to get started'
    }
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
};

const loginInitialValue = {
    username: '',
    password: ''
};

function LoginDialogue({ open, setOpen }) {


    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState(false);

    const [acc, setAcc] = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAcc(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status == 200) {
            handleClose();
            setAcc(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">
                            {account.heading}
                        </Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {account.subHeading}
                        </Typography>
                    </Image>
                    {
                        (account.view === 'login') ?

                            <Wrapper>
                                <TextField variant="standard" label="Enter Username" onChange={(e) => onValueChange(e)} name="username" />
                                {error && <Error>Please enter a valid username or password</Error>}
                                <TextField variant="standard" label="Enter password" onChange={(e) => onValueChange(e)} name="password" />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOtp>Request OTP</RequestOtp>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter First name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Last name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialogue;