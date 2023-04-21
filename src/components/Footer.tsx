import { CopyIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, useToast } from "@chakra-ui/react";

const Footer = () => {
  const toast = useToast();

  function copyLink() {
    toast({
      title: "Link copied!",
      description: "Now you can share with your friends!",
      status: "success",
      duration: 2500,
      isClosable: false,
    });

    navigator.clipboard.writeText("https://keywordextractor.vercel.app/");
  }

  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Text>
          Share with your friends!
          <CopyIcon
            ml={"10px"}
            cursor="pointer"
            _hover={{ color: "teal.200" }}
            width={"20px"}
            height={"20px"}
            onClick={copyLink}
          />
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
