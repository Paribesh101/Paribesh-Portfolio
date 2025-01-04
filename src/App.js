import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import selfImage from './images/self.jpg';
import './styles.css';

function App() {
  return (
    <div className="App">
    
    <body className="body">
      <img src = {selfImage} id = "img" />
      <Box sx={{ '& button': { m: 15 } }}>
        <div class = "nav">
          <Button variant="contained" size = "large" id = "button1">Home</Button>
          <Button variant="contained" size = "large" id = "button2">About</Button>
          <Button variant="contained" size = "large" id = "button3">Contact</Button>
          <Button variant="contained" size = "large" id = "button4">Info</Button>
        </div>
      </Box>
      <p className = "info">This is Paribesh's Site!</p>
    </body>

    </div>
  );
}

export default App;
