// chakra-extended.ts
import * as ChakraUIReact from "@chakra-ui/react";
import * as ChakraUITheme from "@chakra-ui/theme";
import * as ChakraUIStyledSystem from "@chakra-ui/styled-system";
// @ts-ignore
import * as React from "react";
// @ts-ignore
import * as ReactDOM from "react-dom";
(window as any).React = React;
(window as any).ReactDOM = ReactDOM;

(window as any).ChakraUIReact = ChakraUIReact;
(window as any).ChakraUITheme = ChakraUITheme;
(window as any).ChakraUIStyledSystem = ChakraUIStyledSystem;
