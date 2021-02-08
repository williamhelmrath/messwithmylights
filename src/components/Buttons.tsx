import React from "react";
import { TwitterPicker as BlockPicker, ColorResult } from "react-color";
import { Button } from "@material-ui/core";
import Layout from "./Layout";
import { breathe } from "./utils/calls";
import useAuthContext from "./AuthContext";
import { useHistory } from "react-router-dom";

export default function Buttons() {
  const history = useHistory();
  const context = useAuthContext();

  console.log(context);

  if (!context?.auth) {
    history.push("/");
  }

  const handleClick = () => {
    breathe("green");
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

  const handleColorChange = (color: ColorResult) => {
    console.log(color);
    breathe(color.hex);
  };

  return (
    <Layout>
      <Button variant="contained" onClick={handleClick}>
        Mess with my light
      </Button>
      <Button variant="contained" onClick={handleRocketLeague}>
        Rocket League Time!
      </Button>
      <BlockPicker onChange={handleColorChange} />
    </Layout>
  );
}
