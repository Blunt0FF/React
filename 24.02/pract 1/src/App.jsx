/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ThemeProvider,
  createTheme,
  Typography,
  CssBaseline,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";

const theme = createTheme({
  mode: "dark",
});

const StyledButton = styled(Button)`
  background-color: #8b0000;
  color: #fff;
  margin-top: 10px;
  &:hover {
    background-color: #ff4500;
  }
`;

const input = css`
  margin-top: 100px;
  width: 100%;
`;

const card = css`
  margin-top: 20px;
`;

function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  function handleClick() {
    setDisplayText(text);
  }

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <TextField
          css={input}
          onChange={(e) => setText(e.target.value)}
          value={text}
          label="Input text"
          variant="outlined"
        />
        <StyledButton onClick={handleClick} > Click </StyledButton>

        {displayText && (
          <Card css={card}>
            <CardContent>
              <Typography>{displayText}</Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
