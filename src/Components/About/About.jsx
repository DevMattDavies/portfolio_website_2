import "./About.modules.css";
import SectionTitle from "../Section-Title/Section-Title";
import SectionText from "../Section-Text/Section-Text";
import ProfileImage from "../Profile-Image/Profile-Image";

function About() {
  const title = "About Me";
  const text = `I love designing things for the web. I've always had a keen
  interest in tech - it was during the summer of 2021 that I decided
  I wanted to launch myself into a career in the tech industry and
  spent the following months teaching myself to code. Originally coming
  from a project management background, I immediately fell in love
  with the balance between logic and art that web design demands.
  After learning the basics, I attended the School of Code
  full-stack developer bootcamp - a 16-week intensive course
  covering all aspects of programming; from front end design, React,
  Next JS, APIs, UX and UI, to Node JS, Express, Databases and
  test-driven development. Now a graduate, I'm ready to flex those
  new found skills in a real-world tech team.`;

  return (
    <div className="about-section">
      <SectionTitle title={title} />
      <div className="section-separator">
        <SectionText className="text-section" text={text} />
        <ProfileImage className="image-section" />
      </div>
    </div>
  );
}

export default About;
