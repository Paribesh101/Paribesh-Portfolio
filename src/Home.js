import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import selfImage from './images/self.jpg';
import './styles.css';

const Home = () => {
    return (
        <div className="App">
            <body className="body">
                <h1 id = "title">Paribesh's Site</h1>
                <img src = {selfImage} id = "img" />
                <Box sx={{ '& button': { m: 15 } }}>
                    <div class = "nav">
                        <Button href="/" variant="contained" size = "large" id = "button1">Home</Button>
                        <Button href="/about" variant="contained" size = "large" id = "button2">About</Button>
                        <Button href="/contact" variant="contained" size = "large" id = "button3">Contact</Button>
                        <Button href="/info" variant="contained" size = "large" id = "button4">Info</Button>
                    </div>
                </Box>
            </body>
        </div>
    )
  };

export default Home;