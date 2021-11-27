import React from 'react';
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button variant="contained" onClick={(e) => {console.log("hello world")}} />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
