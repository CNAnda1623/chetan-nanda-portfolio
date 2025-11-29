import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/projects/p1.jpg",
    title: "Workspace Management System",
    desc: "Developed a comprehensive Workspace Management System using Python,designed to streamline and optimize workspace allocation and management",
    link: "https://github.com/omkar2816/Workspace-Management-System"
  },
  {
    id: 2,
    img: "/projects/p2.jpg",
    title: "Engineering Era",
    desc: "Developed a scalable Course Management Website with a responsive dashboard, secure login, customizable modules, progress tracking, course statistics, feedback tools, and secure educator-student communication.",
    link: "https://github.com/omkar2816/engineering-era",
  },
  {
    id: 3,
    img: "/projects/p3.jpg",
    title: "SkillMatch Pro",
    desc: "Developed an NLP-driven Resume Intelligence System that extracts skills from resumes, matches them against Job Description (JD) requirements, and ranks candidates based on skill similarity scores. The app also highlights top candidates, displays match percentages, and visualizes skill coverage and gaps.",
    link: "https://github.com/CNAnda1623/Resume_Skill_Extracter",
  },
  {
    id: 4,
    img: "/projects/p4.jpg",
    title: "Facial Recognition Software",
    desc: "Developed a Python-based face recognition system using machine learning to automate face recognition management and generate detailed reports.",
    link: "https://github.com/CNAnda1623/FaceRecognition",
  },
  {
    id: 5,
    img: "/projects/p5.jpg",
    title: "FireChat-Community Chat App",
    desc: "Developed a real-time group chat web application using React and Firebase. Implemented Google Authentication, live message synchronization, and media file uploads via Firebase Storage. Designed a smooth and responsive UI for seamless community communication.",
    link: "https://firechatt.netlify.app",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
