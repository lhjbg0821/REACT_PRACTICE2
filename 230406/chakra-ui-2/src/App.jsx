import {
  ChakraProvider,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
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
      <Menu>
        <MenuButton
          colorScheme="green"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          저녁 메뉴
        </MenuButton>
        <MenuList bgColor={"gray.50"}>
          <MenuGroup title="파스타">
            <MenuItem>알리오올리오</MenuItem>
            <MenuItem>토마토파스타</MenuItem>
            <MenuItem>크림파스타</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="치킨">
            <MenuItem>양념치킨</MenuItem>
            <MenuItem>후라이드치킨</MenuItem>
            <MenuItem>굽네치킨</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="피자">
            <MenuItem>파인애플 피자</MenuItem>
            <MenuItem>토마토 피자</MenuItem>
            <MenuItem>치즈 피자</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
}

export default App;
