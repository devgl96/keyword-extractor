import { CopyIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  useToast,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

interface KeywordsModalProps {
  keywords: string;
  isLoading: boolean;
  isOpen: boolean;
  closeModal: () => void;
}

const KeywordsModal = (props: KeywordsModalProps) => {
  const { keywords, isOpen, closeModal, isLoading } = props;

  const toast = useToast();

  function copyKeywords(socialMedia?: string) {
    if (!socialMedia?.length) {
      toast({
        title: "Keywords copied!",
        description: "Use the keywords whatever you want!",
        status: "success",
        duration: 2500,
        isClosable: false,
      });

      navigator.clipboard.writeText(keywords);

      return;
    }

    if (socialMedia === "youtube") {
      toast({
        title: "Keywords to Youtube Video Tags copied!",
        description: "Use these tags in your video!",
        status: "success",
        duration: 2500,
        isClosable: false,
      });

      const arrayFromKeywords = keywords.split(",");
      const tagsToYoutube = arrayFromKeywords.map((keyword, index) => {
        const nowKeyword = keyword.trim();
        if (index + 1 !== arrayFromKeywords.length) {
          return `#${nowKeyword} `;
        }

        return `#${nowKeyword}, `;
      });
      const stringTagsToYoutube = tagsToYoutube.toString();

      navigator.clipboard.writeText(stringTagsToYoutube);
    } else {
      toast({
        title: "Keywords to Tweet Tags copied!",
        description: "Use these tags in your tweet!",
        status: "success",
        duration: 2500,
        isClosable: false,
      });

      const arrayFromKeywords = keywords.split(",");
      const tagsToTwitter = arrayFromKeywords.map((keyword) => {
        const nowKeyword = keyword.trim();

        return `#${nowKeyword} `;
      });
      const stringTagsToTwitter = tagsToTwitter.toString();

      navigator.clipboard.writeText(stringTagsToTwitter);
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {isLoading ? (
              <CircularProgress isIndeterminate color="blue.300" />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Tooltip label="Copy to Tweet Tags" bg="blue" color="white">
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => copyKeywords("tweet")}
              >
                Copy
                <Icon
                  as={FaTwitter}
                  width={"20px"}
                  height={"20px"}
                  ml={"5px"}
                />
              </Button>
            </Tooltip>
            <Tooltip
              label="Copy to Youtube Video Tags"
              bg="red.600"
              color="white"
            >
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => copyKeywords("youtube")}
              >
                Copy
                <Icon
                  as={FaYoutube}
                  width={"25px"}
                  height={"25px"}
                  ml={"5px"}
                />
              </Button>
            </Tooltip>
            <Tooltip label="Ordinary Copy" bg="teal" color="white">
              <Button
                colorScheme="teal"
                mr={3}
                onClick={() => copyKeywords("youtube")}
              >
                Copy
                <Icon as={CopyIcon} width={"25px"} height={"25px"} ml={"5px"} />
              </Button>
            </Tooltip>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;
