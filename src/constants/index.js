import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a Passionate Full Stack Developer with expertise in front-end technologies like HTML, CSS, JavaScript, React, and Bootstrap. Experienced in back-end development using Node.js, PHP, Java, and Python, along with database management in MongoDB and MySQL. Passionate about building responsive, scalable, and efficient web applications, ensuring high-quality code, performance optimization, and exceptional user experiences across all platforms.`;

export const ABOUT_TEXT = `As a Full Stack Developer, I specialize in creating dynamic web applications using front-end technologies such as HTML, CSS, JavaScript, React, and Bootstrap. With strong back-end experience in Node.js, PHP, Java, and Python, and expertise in database management with MongoDB and MySQL, I aim to deliver innovative, high-performance solutions. I am committed to optimizing functionality and ensuring seamless user experiences across platforms while maintaining clean and efficient code.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Sep 2023",
    role: "Data Scientist",
    company: "Personifwy",
    description: `As a Data Science Intern at Personifwy, I gained hands-on experience in data cleaning, preprocessing, and exploratory data analysis using Python libraries such as Pandas and NumPy. I developed and deployed machine learning models, including Random Forest and Logistic Regression, to solve business challenges, achieving 97% Accuracy. Additionally, I created data visualizations and reports using tools like Matplotlib and Tableau, enabling data-driven decision-making and actionable insights.`,
    technologies: ["Python", "Data Science", "Deep Learning", "Machine Learning"],
  },
  {
    year: "Feb 2024 - Mar 2024",
    role: "Full Stack Developer",
    company: "Destination Technologies",
    description: `During my Java Full Stack Developer Internship at Destination Technologies, I designed and implemented web applications by leveraging Java, Spring Boot, and MySQL for back-end development. I crafted responsive front-end interfaces using HTML, CSS, JavaScript, and React, collaborated with teams to optimize functionality, and delivered scalable, user-centric solutions effectively.`,
    technologies: ["HTML", "CSS", "react.js", "mySQL","JavaScript","Java"],
  }
];

export const PROJECTS = [
  {
    title: "Mp3 Player Web Application",
    image: project1,
    description:
      "The Project is a MP3 Music Player, We can listen to the music that we want from the list of available songs. The Application is very responsive. It can be used in any Device (Highly portable). I have also used Google fonts and font awesome tools which gives us amazing fonts and icons.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AskHub Web Application",
    image: project2,
    description:
      "Built AskHub, a Q&A platform using HTML, CSS, Bootstrap, PHP, and MySQL, enabling users to ask, search, and answer questions. Implemented dynamic authentication, updating the navbar to display logout and hide login/signup options upon successful login. Designed features to view previous questions, latest user queries, and answers under specific questions for seamless interaction. Optimized MySQL database, ensuring efficient management of user accounts, questions, and answers.",
    technologies: ["HTML", "CSS", "PHP", "MySQL","Bootstrap"],
  },
  {
    title: "Daily News Web Application",
    image: project3,
    description: "Developed a News Web Application using React and Bootstrap, providing real-time news fetched from NewsAPI. Implemented React and React state management to manage data and update the UI dynamically. Optimized application responsiveness using Bootstrap for seamless performance across all devices. Integrated API requests to display real-time news updates and ensured smooth loading of content.",
    technologies: ["HTML", "CSS", "react.js", "Bootstrap", "Fetch API"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "TextUtils",
    image: project5,
    description:
      "Developed a React-based TextUtils web application for text manipulation (e.g., word count, case conversion). Integrated Bootstrap for responsive and modern UI design, enhancing user experience. Deployed the application on Vercel for easy accessibility and scalability. Utilized state management in React to handle text transformations in real-time. Implemented key features like text formatting, copying text to the clipboard, and dark/light theme modes. Ensured cross-browser compatibility and optimized performance for mobile and desktop platforms.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap"],
  }
];

export const CONTACT = {
  address: "338, 28th Cross Road, Sagayapura, Richards Town, Bengaluru, Karnataka",
  phoneNo: "+918867468300",
  email: "rudragouda.h2002@gmail.com",
};