import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Devloper",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Tech Trainer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "PELEGUIN GROUP",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - Febuary 2023",
      points: [
        "Designing and implementing user-friendly interfaces for web and mobile applications.",
        "Writing clean, maintainable, and efficient code using HTML, CSS, and JavaScript.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "LEARNBLUE",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - April 2023",
      points: [
        "Developing and maintaining websites using programming languages such as HTML, CSS, JavaScript, and Wordpress",
        "Creating and integrating databases to store and retrieve information for web applications.",
        "Collaborating with cross-functional teams to ensure the functionality, usability, and performance of web applications.",
        "Staying up-to-date with emerging trends and technologies in web development to continuously improve the quality of web experiences.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Smart City Mall Africa",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2022 - June 2023",
      points: [
        "Designing, developing, and testing software applications and systems.",
        "Collaborating with cross-functional teams to analyze requirements and develop technical solutions.",
        "Writing clean, efficient, and maintainable code using programming languages such as Js, C++, Wordpress.",
        "Conducting code reviews, debugging and troubleshooting issues to ensure the quality and reliability of software products."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Freelancing",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Working with clients to understand their requirements and develop customized solutions for their web and mobile applications.",
        "Designing and implementing user-friendly interfaces using HTML, CSS, JavaScript, Wordpress and more.",
        "Collaborating with clients to ensure their satisfaction with the final product and addressing any issues or concerns.",
        "Staying up-to-date with emerging trends and technologies in front-end development to offer innovative solutions to clients."
      ],
      },
  ];
  
  const testimonials = [
    {
      testimonial:
        "David is an outstanding developer and a leader in his space. Over the years working with David he has shown tremendous progress in learning and improvement at his skills.",
      name: "Kazeem Quadri",
      designation: "CFO",
      company: "Dark Ace",
      image: "https://kaz.com.ng/wp-content/uploads/2021/11/IMG_5409-scaled.jpg",
    },
    {
      testimonial:
        "It was a delightful experience collaborating with David. His mastery of frontend development shone through his work during his time at Peleguin Group and Smart City Mall Africa.",
      name: "Chris Brown",
      designation: "Executive Director",
      company: "Peleguin Group, Smart City Mall",
      image: "https://media.licdn.com/dms/image/D4D03AQFi2Yuv40lhyg/profile-displayphoto-shrink_200_200/0/1678412334528?e=1694649600&v=beta&t=69zFvH3XnG8PQJYc_YSglRQ35R8b5OqDaVwT7pmkgkE",
    },
    {
      testimonial:
        "David is an exceptional developer who transformed our outdated website into a stunning and modern platform. His attention to detail, and technical skills are impressive, and he delivered beyond our expectations.",
      name: "Mrs Jibri",
      designation: "Founder",
      company: "Usoolul-Imaan Tahfeez Schools",
      image: "https://usooluliman.com/wp-content/uploads/2021/10/cropped-lg.png",
    },
  ];
  
  const projects = [
    {
      name: "School WebApp",
      description:
        "Web-based platform that enables users to search, book, and manage school resources, including classrooms, equipment, and schedules, providing a convenient and efficient solution for school management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CMS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://usooluliman.com/",
    },
    {
      name: "Personal Portfolio",
      description:
        "Web-based platform that allows users to showcase, manage, and promote their development projects, providing a convenient and efficient solution for displaying their skills and expertise.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://davidonilude.me/dev",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };