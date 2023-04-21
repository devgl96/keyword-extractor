import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";

import logo from "../assets/openai.png";
const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} alt="openai logo" />
        <Text>
          Powered by{" "}
          <Link color="teal.200" href="https://openai.com/">
            OpenAI
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
