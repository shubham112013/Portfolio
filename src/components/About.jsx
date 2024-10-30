import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am Shubham Mishra, a Front-End Developer dedicated to transforming
            ideas into engaging, interactive web experiences. With expertise in
            HTML5, CSS3, JavaScript, React, and Docker, I create intuitive,
            responsive designs that combine creativity with functionality. My
            focus lies in building visually appealing applications that are
            technically robust, leveraging component-based architecture and best
            practices to ensure seamless, user-centered interactions. Driven by
            a passion for innovation, I continually explore new tools and
            methodologies, aiming to craft applications that are as efficient as
            they are impactful. Let’s create something remarkable together!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
