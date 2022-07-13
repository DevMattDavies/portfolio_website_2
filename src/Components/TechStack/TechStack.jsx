import SectionText from "../Section-Text/Section-Text";
import SectionTitle from "../Section-Title/Section-Title";
import TechIcons from "../Tech-Icons/Tech-Icons";
import "./TechStack.css";

function TechStack() {
  const title = "Tech Stack";
  const text = `Leveraging a range of languages and technologies to produce
  complete, end-to-end applications is at the heart of what I do. A solid understanding of the fundamentals - HTML, CSS and JavaScript - before moving on to back-end and learning to create apps utilising
  the power of Express, Node JS, and database storage. More recently
  I've been able to consolidate this knowledge and, with the help of
  React and Next JS, create more complex user interfaces and
  dynamically interactive webpages that can efficiently scale to
  user demands. During my time at School of Code, there has also been a focus on
  non-programming skills; wireframing with Figma, project tracking
  using Trello and Jira, and project methodology with an Agile
  approach.`;

  return (
    <div className="tech-section">
      <SectionTitle id='tech-title' title={title} />
      <div className="tech-section-separator">
        <TechIcons />
        <SectionText className="text-section" text={text} />
      </div>
    </div>
  );
}

export default TechStack;
