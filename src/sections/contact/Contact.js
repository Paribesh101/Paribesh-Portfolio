import "../../styles.css";
import { Box, TextField, Button, Typography, Snackbar } from '@mui/material';
import emailjs from "@emailjs/browser"; // Import EmailJS
import { useRef, useState } from 'react'; // Import useRef

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const[isLoading, setIsLoading] = useState(false);
  const[openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const  {name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message){
      setSnackbarMessage("Please fill out all fields.");
      setOpenSnackbar(true);
      return;
    }


    // EmailJS send function
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
      )

  };


  return (
    <section className="contact" style={{ minHeight: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "12px" }}>
      <h1 className="contacttitle">Contact</h1>
      <div className="reach">
        <p className="paragraph">
          If you'd like to contact me and get in touch. Please call, email, or
          follow me on LinkedIn. <br />Feel free to message me.
        </p>

        <Box sx={{ backgroundColor: '#2a2f35', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, overflowY: 'auto', borderRadius: '10%' }}>
          <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Contact and get in touch. Please call, email, or follow me on LinkedIn. Feel free to message.
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', '& > :not(style)': { m: 0.5, width: '90%', borderRadius: '20px' } }} noValidate autoComplete="off">
            <TextField id="namefield" placeholder="Enter your name..." variant="outlined" sx={{ backgroundColor: 'white', borderRadius: '20px', '& .MuiInputBase-input': { padding: '8px' }, '& .MuiInputBase-input::placeholder': { color: 'gray' } }} />
            <TextField id="emailfield" placeholder="Enter your email..." variant="outlined" sx={{ backgroundColor: 'white', borderRadius: '20px', '& .MuiInputBase-input': { padding: '8px' }, '& .MuiInputBase-input::placeholder': { color: 'gray' } }} />
            <TextField id="messagefield" placeholder="Enter your message..." variant="outlined" multiline rows={3} sx={{ backgroundColor: 'white', borderRadius: '20px', '& .MuiInputBase-input': { padding: '8px' }, '& .MuiInputBase-input::placeholder': { color: 'gray' } }} />
            <Button variant="contained" type="submit" sx={{ backgroundColor: '#007bff', color: 'white', width: '90%', borderRadius: '20px', mt: 1, padding: '8px' }} onClick={() => handleSubmit()}>SUBMIT</Button>
          </Box>
        </Box>
      </div>

      <div className="contact-details" style={{ width: { xs: "100%", sm: "35%" }, marginTop: "12px", textAlign: { xs: "center", sm: "left" } }}>
        <h1 className="contacttitle">Contact</h1>

 
        <div className="info">

          <div className = "myinfo">
            <h2 className="email">Email</h2>
            <p>Paribesh101@gmail.com</p>
            <h2 className="address">Address</h2>
            <p>Fort Worth, Texas</p>
          </div>
          
          <h2 className="social">Social</h2>

          <div className="links">
            <a href="https://github.com/Paribesh101" className="github" target="_blank" rel="noreferrer">
              <img style={{ width: "30px", height: "30px" }} src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png" alt="GitHub" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/paribesh-upreti-3a5366268/" className="linkedin" target="_blank" rel="noreferrer">
              <img style={{ width: "30px", height: "30px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" loading="lazy" />
            </a>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Contact;