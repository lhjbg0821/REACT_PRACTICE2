import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { onClick, onOpen, onClose, isOpen } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>What's Up!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>안녕하세요 저는 블록체인 개발자 입니다.</ModalBody>
            <ModalFooter>
              <Button mr={4} onClick={onClose}>
                닫기
              </Button>
              Designed by, ollok_99
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
