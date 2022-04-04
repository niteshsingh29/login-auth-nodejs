import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
const VARIANT_COLOR = "teal";

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <RegisterArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const RegisterArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <RegisterHeader />
          <RegisterForm />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

const RegisterHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Register to Enjoy</Heading>
    </Box>
  );
};

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [state, setState] = useState([]);


  //   useEffect(() => {
  //     axios
  //       .post(url, {
  //   Name:userName,
  //         Email: Email,
  //         Password: Password,
  //   Confirm:confirmPassword

  //       })
  //       .then(() => {
  //         console.log("data sent to particular api successfuly");
  //         setState()
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>
            User Name <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="email"
            placeholder="User Name must be short"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            Email address <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>
            Password <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="password"
            placeholder="Password must be at least 5 characters"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>
            Confirm Password <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </FormControl>

        <Link to="/Login"><Button variantColor={VARIANT_COLOR} width="full" mt={4}>
          Register
        </Button></Link>
      </form>
    </Box>
  );
};

export default Register;
