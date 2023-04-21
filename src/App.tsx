import { Container, Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextInput from "./components/TextInput";

const App = () => {
  function extractKeywords(text: string) {
    console.log("extractKeywords: ", text);
  }

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
