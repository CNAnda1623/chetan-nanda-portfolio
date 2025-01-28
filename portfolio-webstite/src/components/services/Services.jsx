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
          
      </div>
    </div>
  );
};

export default Services;
