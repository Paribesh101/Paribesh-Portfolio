import "../../styles.css";

const About = () => {
  return (
    <section className="about">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "-20%",
          fontFamily: "varela round",
          color: "antiquewhite",
          fontSize: "200%",
        }}
      >
        About Me
      </h1>
      <h2
        style={{
          fontFamily: "varela round",
          color: "antiquewhite",
          marginBottom: "2%",
        }}
      >
        A bit about me
      </h2>

      <h3 className="description">
        My name is Paribesh Upreti and I'm an aspiring developer. <br></br>I
        graduated from Fossil Ridge High School in 2021, and I'm currently
        attending UTD as a Computer Science major. <br></br>
        I'm passionate, driven, and always excited to learn new technologies. My
        current skills encompass react, node.js, javascript, typescript, Java,
        and python. <br></br>
        I'm about to graduate this semester, and I'm thrilled to be going into
        the workforce. <br></br>
      </h3>
    </section>
  );
};

export default About;
