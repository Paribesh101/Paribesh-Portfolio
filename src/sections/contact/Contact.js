import "../../styles.css";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <section className="contact">
      <div className="reach">
        <h1 className="contacttitle">Contact</h1>
        <p className="paragraph">
          If you'd like to contact me and get in touch. Please call, email, or
          follow me on LinkedIn. <br></br>Feel free to message me.
        </p>

        <Box component="form" sx={{ '& > :not(style)': { m: 3, width: '25ch', borderRadius: '10%', display: 'flex' } }}noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Enter your name" variant="outlined"  sx={{ '& .MuiInputBase-input': {  m: 0.2, backgroundColor: 'white', width: '25ch', borderRadius: '10px', display: 'flex' } }} />
          <TextField id="outlined-basic" label="Enter your name" variant="outlined"  sx={{ '& .MuiInputBase-input': {  m: 0.2, backgroundColor: 'white', width: '25ch', borderRadius: '10px', display: 'flex' } }} />
          <TextField id="outlined-basic" label="Enter your name" variant="outlined"  sx={{ '& .MuiInputBase-input': {  m: 0.2, backgroundColor: 'white', width: '25ch', borderRadius: '10px', display: 'flex' } }} />
        </Box>

        <p className="address">
          Address<br></br> Fort Worth, Texas
        </p>
        <div className="links">
          <a href="https://github.com/Paribesh101" className="github">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paribesh-upreti-3a5366268/"
            className="linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="info">
        <h1 className="email">
          Email
          <br></br> Paribesh101@gmail.com
        </h1>
        <h1 className="phone">
          Phone<br></br> 682-557-6374
        </h1>
      </div>
    </section>
  );
};

export default Contact;
