import Timeline from "../components/AboutPage/Timeline";
import AboutContent from "../components/AboutPage/AboutContent";

function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AboutContent
        title="About Me"
        imgSrc="https://via.placeholder.com/150"
        description="Hi, I'm Carlo, a passionate front-end developer with a deep interest in technology and software. My journey has been fueled by curiosity and determination to learn every aspect of the field. While my education laid the foundation, most of what I know is self-taught, which admitedly is a struggle. I thrive more under deadlines and external expectations, as I find I work best when tackling real-world tasks, especially those with tight timelines."
      />

      <AboutContent
        title="Biography"
        description="I was born in Tallinn, Estonia, and have always been surrounded by technology. From getting my first computer at the age of 7 to mastering the art of 'Googling' by age 9, tech has been a constant presence in my life. Despite my early interest, I never thought I'd pursue a career in programming. However, after sitting in a programming course at Tallinn Polytechnic, it became a turning point for me. It made me realize how simple this all is to me and watching my fellow students struggle with concepts like binary or AND/OR signals made me realize that this is my purpose. So, I immediately got into a internship at Webshark after re-rolling my course to Multimedia. You can see more of it in my timeline."
      />

      <Timeline />

      <AboutContent
        title="Hobbies"
        description="I think like most people, we enjoy surrounding ourselves in new and exciting hobbies, at least this is the case of me as I want to basically 'learn' everything, but we don't have all the time in the world, so my hobbies won't surprise you. As you'd expect, Coding is one of them. I spend my time either building web projects to suit my needs or work on game projects so that I can learn real coding. Other hobbies also include drawing, mostly in digital media. I also have a few smaller hobbies I try to keep track of, such as 3D modeling and to a lesser extent, making music (though not much is done on that front)."
      />

      <AboutContent
        title="Future Goals"
        description="While front-end development is my current focus, I want to deepen my expertise in more complex areas of programming. Front-end work is rewarding but can sometimes feel straightforward. I'd like to solve challenges rather than build the same UI over and over. There's a unique satisfaction in tackling difficult tasks and seeing them through to completion, and that's the path I want to explore."
      />
    </div>
  );
}

export default About;
