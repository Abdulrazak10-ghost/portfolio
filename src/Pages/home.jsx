import { useState, useEffect, useRef } from "react";
import Footer from "../Components/Footer.jsx";
import "../Components/Home.css";
import firstimage from "../assets/image1.jpeg";
import secondimage from "../assets/image2.jpeg";
import thirdimage from "../assets/image3.jpeg";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaTools,
  FaStar,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLaptopCode
} from "react-icons/fa";

export default function Home() {
  // Hero slides
  const slides = [
    { image: firstimage, title: "I am Abdulrazak", text: "Front-End Developer and Web developer.", color: "cyan" },
    { image: secondimage, title: "I am Abdulrazak", text: "I love creating smooth web experiences.", color: "yellow" },
    { image: thirdimage, title: "I am Abdulrazak", text: "Turning ideas into interactive websites.", color: "red" },
  ];

  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [fade, setFade] = useState(true);

  // Refs for slide-in animations
  const bioRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const servicesRef = useRef();
  const linksRef = useRef();
  const testimonialsRef = useRef();
  const ctaRef = useRef();

  const [bioVisible, setBioVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Typing effect
  useEffect(() => {
    const fullText = slides[current].text;
    let index = 0;
    setTypedText("");
    setFade(true);

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setFade(false);
          setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
          }, 800);
        }, 2500);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [current]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  // Intersection Observer for slide-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === bioRef.current) setBioVisible(true);
            if (entry.target === skillsRef.current) setSkillsVisible(true);
            if (entry.target === projectsRef.current) setProjectsVisible(true);
            if (entry.target === servicesRef.current) setServicesVisible(true);
            if (entry.target === linksRef.current) setLinksVisible(true);
            if (entry.target === testimonialsRef.current) setTestimonialsVisible(true);
            if (entry.target === ctaRef.current) setCtaVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    [bioRef.current, skillsRef.current, projectsRef.current, servicesRef.current, linksRef.current, testimonialsRef.current, ctaRef.current].forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ];

  const services = [
    { icon: <FaLaptopCode />, title: "Web Development", description: "Building responsive and interactive web apps." },
    { icon: <FaReact />, title: "React Apps", description: "Developing scalable SPA with React.js " },
    { icon: <FaCss3Alt />, title: "UI/UX Design", description: "Creating clean and modern user interfaces." },
    { icon: <FaTools />, title: "Maintenance", description: "Debugging and maintaining existing websites." },
  ];

  const projects = [
    { title: "Translify Landing Page", link: "https://abdulrazak10-ghost.github.io/translify-landing-page/" },
    { title: "MyTV", link: "https://abdulrazak10-ghost.github.io/Mytv/" },
    { title: "RedStore E-commerce", link: "https://abdulrazak10-ghost.github.io/redstore-ecommerce-store/" },
    { title: "Dangote Demo", link: "https://abdulrazak10-ghost.github.io/dangote-demo/" },
    { title: "Christie Café", link: "https://abdulrazak10-ghost.github.io/christie-cafe/" },
    { title: "Haley Store Front", link: "https://abdulrazak10-ghost.github.io/store-front-/" },
  ];

  const testimonials = [
    { name: "Micheal", role: "CEO, TechCorp", text: "Abdulrazak transformed our ideas into an amazing website! Highly professional, creative, and reliable.", rating: 5 },
    { name: "Dave Xin", role: "Founder, StartUpX", text: "A talented developer with great attention to detail. Loved working with him on our platform.", rating: 5 },
    { name: "Mary", role: "Product Manager, WebSolutions", text: "Abdulrazak delivered fast, clean, and functional websites. Truly exceeded our expectations!", rating: 5 },
  ];

  const links = [
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/2348129816599" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/abdulrazak10-ghost" },
    { icon: <FaTwitter />, label: "X Twitter", href: "https://x.com/dameitsup" },
    { icon: <FaEnvelope />, label: "Email", href: "mailto:abdulrzaqbello08@gmail.com" },
    { icon: <FaPhone />, label: "Phone", href: "tel:+2348129816599" },
    { icon: <FaMapMarkerAlt />, label: "Location", href: "#" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className={`carousel fade ${fade ? "fade-in" : "fade-out"}`}>
          <div className="left">
            <img src={slides[current].image} alt="carousel slide" />
          </div>
          <div className="right">
            <h1>Hi, <span style={{ color: slides[current].color }}>{slides[current].title}</span></h1>
            <p>{typedText}<span className="cursor">{cursorVisible ? "|" : " "}</span></p>
          </div>
        </div>
      </section>

      {/* Bio & Skills */}
      <section className="bio-skills-section">
        <div className={`bio-section slide-in ${bioVisible ? "visible" : ""}`} ref={bioRef}>
          <h2>About Me</h2>
          <p>Hi! I'm Abdulrazak Bello, a passionate Front-End Developer and Web Developer. I love creating smooth and interactive web experiences, turning ideas into functional and visually appealing websites.</p>
        </div>

        <div className={`skills-section slide-in ${skillsVisible ? "visible" : ""}`} ref={skillsRef}>
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => <div key={i} className="skill-card"><div className="skill-icon">{skill.icon}</div><span className="skill-name">{skill.name}</span></div>)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={`projects-section slide-in ${projectsVisible ? "visible" : ""}`} ref={projectsRef}>
        <h2><FaTools style={{ marginRight: "0.5rem", color: "cyan" }} />Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => <div key={i} className="project-card"><h3>{p.title}</h3><a href={p.link} target="_blank" rel="noopener noreferrer">View Demo</a></div>)}
        </div>
      </section>

      {/* My Services */}
      <section className={`services-section slide-in ${servicesVisible ? "visible" : ""}`} ref={servicesRef}>
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Links */}
      <section className={`links-section slide-in ${linksVisible ? "visible" : ""}`} ref={linksRef}>
        <h2>My Links</h2>
        <div className="links-grid">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="link-card">
              {l.icon} <span>{l.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={`testimonials-section slide-in ${testimonialsVisible ? "visible" : ""}`} ref={testimonialsRef}>
        <h2><FaStar style={{ color: "cyan", marginRight: "0.5rem" }} />Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-rating">{Array.from({ length: t.rating }).map((_, j) => <FaStar key={j} color="#FFD700" />)}</div>
              <h3 className="testimonial-name">{t.name}</h3>
              <span className="testimonial-role">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`cta-section slide-in ${ctaVisible ? "visible" : ""}`} ref={ctaRef}>
        <h2>Let's Work Together</h2>
        <p>If you have a project or idea, feel free to reach out. I'm ready to bring your vision to life!</p>
        <a href="mailto:abdulrazaqbello08@gmail.com" className="cta-button">Contact Me</a>
      </section>

      <Footer />
    </>
  );
}
