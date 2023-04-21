import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import KeywordsModal from "./components/KeywordModal";
import keywordExtractor from "keyword-extractor";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function extractKeywords(text: string) {
    setIsLoading(true);
    setIsOpen(true);

    const extractionResultData = keywordExtractor.extract(text, {
      language: "english",
      remove_digits: true,
      remove_duplicates: true,
      return_changed_case: true,
    });

    const data = extractionResultData.join(", ");

    setKeywords(data);
    setIsLoading(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        isLoading={isLoading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
