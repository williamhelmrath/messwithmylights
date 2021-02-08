import React from "react";
import { Box } from "@material-ui/core";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      width="100vw"
      height="70vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}
