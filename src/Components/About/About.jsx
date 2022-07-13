import "./About.css";
import SectionTitle from "../Section-Title/Section-Title";
import SectionText from "../Section-Text/Section-Text";
import ProfileImage from "../Profile-Image/Profile-Image";

function About() {
  const title = "About Me";
  const text = `I love designing things for the web. Originally coming
  from a project management background, I immediately fell in love
  with the balance between logic and art that web design demands.
  A product of an intensive bootcamp - now a full-stack developer who
  is comfortable using modern technologies and languages such as React, Next JS and TypeScript
  to achieve beautiful and flexible designs that can scale to user needs.`;
  return (
    <div className="about-section">
      <SectionTitle title={title} />
      <div className="about-section-separator">
        <SectionText className="text-section" text={text} />
        <ProfileImage className="image-section" />
      </div>
    </div>
  );
}

export default About;
