import { Box } from "@chakra-ui/react";
import B from "./B";
import { Fragment } from "react";

function A() {
  return (
    // 가장 바깥쪽 태그를 빈 태그로 만듦
    // return 기준으로 최상위를 하나가 감싸고 있어야 함. 그 안에 포함되어 있어야함
    <>
      <Box w={100} h={100} bgColor="red.500">
        A
      </Box>
      <B />
    </>
  );
}

export default A;
