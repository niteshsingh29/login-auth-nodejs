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
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
const VARIANT_COLOR = "teal";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = () => {
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
          <LoginHeader />
          <LoginForm />
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

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Sign In to Your Account</Heading>
      <Text>
        Or <Link color={`${VARIANT_COLOR}.500`}>start your 14 days trial</Link>
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  const [valueEmail, setemailValue] = useState("");
  const [valuePassword, setpasswordValue] = useState("");
  const [state, setState] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .post(url, {
  //         Email: valueEmail,
  //         password: valuePassword,
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
          <FormLabel>Email address <span style={{ color: "red" }}>*</span></FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={valueEmail}
            onChange={(e) => setemailValue(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password <span style={{ color: "red" }}>*</span></FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={valuePassword}
            onChange={(e) => setpasswordValue(e.target.value)}
          />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
