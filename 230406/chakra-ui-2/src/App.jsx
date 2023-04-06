import {
  ChakraProvider,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuIcon,
} from "@chakra-ui/react";
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ChakraProvider>
      <Box color="red.400">Hello, Chakra UI~</Box>
      <Button
        isLoading={isLoading}
        colorScheme="pink"
        leftIcon={<PhoneIcon />}
        variant={"solid"}
      >
        Call
      </Button>
    </ChakraProvider>
  );
}

export default App;
