import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Layout from "./Layout";
import useAuthContext from "./AuthContext";

export default function Login() {
  const history = useHistory();
  const context = useAuthContext();

  const [password, setPassword] = useState<string>("");

  if (password === "william") {
    context?.setAuth(true);
    history.push("/home");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  return (
    <Layout>
      <TextField
        value={password}
        label="Password"
        variant="outlined"
        onChange={handleChange}
      />
    </Layout>
  );
}
