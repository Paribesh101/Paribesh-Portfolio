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

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate // Disables HTML5 validation
          autoComplete="off" // Turns off auto-completion
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World" // Pre-filled text
            />
          </div>
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
