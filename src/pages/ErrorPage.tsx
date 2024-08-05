import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Упс...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Страницы не существует"
            : "Произошла ошибка, перезагрузите страницу"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
