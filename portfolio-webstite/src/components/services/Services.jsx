import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import MugModelContainer from "./mug/MugModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 3,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Software Developer",
    counter: 3,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "ML Engineer",
    counter: 1,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          My Services
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={7} text="Projects Completed" />
          <Counter from={0} to={15} text="Skills" />
        </div>
      </div>
      <div className="sSection right">
        {/* {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )} */}
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="Title"
        >
          My Skills
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
        <div class="skill-box">
          <div class="grid">
              <div class="box"><img src="HTML1.png" alt="Logo 1"/></div>
              <div class="box"><img src="CSS.png" alt="Logo 2"/></div>
              <div class="box"><img src="JS1.png" alt="Logo 3"/></div>
              <div class="box"><img src="react.png" alt="Logo 4"/></div>
              <div class="box"><img src="node.png" alt="Logo 5"/></div>
              <div class="box"><img src="ex.png" alt="Logo 6"/></div>
              <div class="box"><img src="java.png" alt="Logo 7"/></div>
              <div class="box"><img src="python.png" alt="Logo 8"/></div>
              <div class="box"><img src="django1.png" alt="Logo 9"/></div>
              <div class="box"><img src="sql.png" alt="Logo 10"/></div>
              <div class="box"><img src="postgresql1.png" alt="Logo 11"/></div>
              <div class="box"><img src="github.png" alt="Logo 12"/></div>
              <div class="box"><img src="C.png" alt="Logo 13"/></div>
              <div class="box"><img src="DS.png" alt="Logo 14"/></div>
              <div class="box"><img src="microsoft.png" alt="Logo 15"/></div>
          </div>
        </div>
        </motion.div>
          
        {/* <div class="skills-grid">
          <div class="line">01. Java</div>
          <div class="line">02. Python</div>
          <div class="line">03. Django</div>
          <div class="line">04. C</div>
          <div class="line">05. HTML/CSS/JS</div>
          <div class="line">06. React</div>
          <div class="line">07. SQL</div>
          <div class="line">08. Git/Github</div>
          <div class="line">09. Data Structures</div>
        </div> */}
        {/* <div class="skills__container container grid">
               <div class="skills__data">
                  <h3 class="section__subtitle">
                     Favorite <span>Skills</span>
                  </h3>

                  <h2 class="section__title">
                     My Skills
                  </h2>

                  <p class="skills__description">
                     See fully what skills I have and perform, 
                     to develop the projects for you.
                  </p>

                  <a href="#projects" class="button">See Projects</a>
               </div>
               <div class="skills__content">
                  <ol class="skills__group">
                     <li class="skills__item">Python</li>
                     <li class="skills__item">Java</li>
                     <li class="skills__item">C/C++</li>
                     <li class="skills__item">Django</li>
                     <li class="skills__item">Html/Css/JS</li>
                     <li class="skills__item">React</li>
                  </ol>

                  <ol class="skills__group" start="7">
                     <li class="skills__item">SQL</li>
                     <li class="skills__item">Git/Github</li>
                     <li class="skills__item">Data Structures</li>
                     <li class="skills__item">OOPS</li>
                     <li class="skills__item">DBMS</li>
                  </ol>
               </div>
            </div> */}
      </div>
    </div>
  );
};

export default Services;
