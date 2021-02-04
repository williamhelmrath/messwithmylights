import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";

const App: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  const handleClick = () => {
    fetch("https://api.lifx.com/v1/lights/all/effects/breathe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
      },
      body: JSON.stringify({
        color: "green",
        persist: false,
        power_on: false,
      }),
    });
  };

  const handleRocketLeague = () => {
    fetch("https://api.lifx.com/v1/lights/all/effects/pulse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
      },
      body: JSON.stringify({
        color: "#ff8a0c",
        from_color: "#0db2ff",
        period: 1.5,
        cycles: 2,
        persist: false,
        power_on: false,
      }),
    });
  };

  const handleChange = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => setPassword(e.currentTarget.value);

  return (
    <Layout>
      {password !== "william" ? (
        <TextField
          value={password}
          label="Password"
          variant="outlined"
          onChange={handleChange}
        />
      ) : (
        <>
          <Button variant="contained" onClick={handleClick}>
            Mess with my light
          </Button>
          <Button variant="contained" onClick={handleRocketLeague}>
            Rocket League Time!
          </Button>
        </>
      )}
    </Layout>
  );
};
interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
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

export default App;
