import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import React from 'react';
import { Chrono } from 'react-chrono'; 

function App() {
  const items = [
    {
      title: "Early Life",
      cardTitle: "Birth And Childhood",
      cardDetailedText: "Mark Dean was born in Jefferson City, Tennessee on the 2nd of March 1957. He showed an big interest in technology at a very young age. He learnt some skills from his father (James) who was an electrician and sometimes took Mark to work. They built things from scratch including equipment like tractors.",
      media: {
        source: {
          url:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Downtown_Jefferson_City_looking_west.jpg"
        },
        type: "IMAGE",
        title: "Jefferson City, Tennessee"

      }
    },
    {
      title: "Education",
      cardTitle: "High School",
      cardDetailedText: "Mark Dean went to Jefferson City High School. He excelled at both academics and sports. He tutored other students in areas like trigonometry. In middle school, he made up his mind on becoming a computer engineer. In high school (1970), he built his own computer. He then went to the university of Tenessee on a scholarship.",
      media: {
        source: {
          url:"https://kagi.com/proxy/Mark-Dean-at-IBM-1980s_unique-coloring.jpg?c=HtfFJ_bMCRTN9yWiRaUCXzRXAWr8eo_V9f9sdAjx-wL536wO-PXrVCee1uQQuZNFuvt_HPfx0K5ee6qublgkiOebSqnC-yzP-KMn1c9esyPp-JFLxx8KFDgh1M6UwMGonvV1foZor9H91wECsa-lkrquor5eLn4cyfjH5hapChCQFWOD79D3pumLNvM6D45PdrhyFsXH8Pi4Fau4N7e6NQ%3D%3D"
        },
        type: "IMAGE",
        title: "Mark Dean in High School",
      }
    },
    {
      title: "Biggest Breakthroughs",
      cardTitle: "Work at IBM",
      cardDetailedText: "Mark Dean's biggest achievment was the invention of the AT/ISA bus. It was a way to connect and communicate between the computer's processor and other components. This sparked the development of many third party devices and is the reason why many companies today are still thriving. It was originally a part of IBM's first gen PC, but was then universally adopted in 1984 after some evolution.",
      media: {
        source: {
          url:"https://kagi.com/proxy/Isa1.jpg?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHCT7W6EguR-Gy7e-iRDROBElQbG0KBXLdF3Y-PCvLaY_2pMSLiUCBVTMYHMJm2FdFU%3D",
        },
        type: "IMAGE",
        title: "AT/ISA Bus",
      }
    },
    {
      title: "Other Impacts",
      cardTitle: "Supercomputing",
      cardDetailedText: "In 1999, Mark Dean put together a team of engineers with the goal of creating an extremely fast and powerful supercomputer codenamed 'Blue Gene'. He said he realised after working on it that they could create a supercomputer that was viable for normal businesses while still maintaining their original goal. At this time he was the Vice President of Systems at IBM. They also decided to run a second Blue Gene project simultaneously.",
      media: {
        source: {
          url:"https://upload.wikimedia.org/wikipedia/commons/d/d3/IBM_Blue_Gene_P_supercomputer.jpg"
        },
        type: "IMAGE",
        title: "Blue Gene Supercomputer",
      },
    },
    {
      title: "International Recognition",
      cardTitle: "The Fastest Computer In The World",
      cardDetailedText: "5 years and $100 Million later, IBM revealed Blue Gene which was manafactured with the help of a US government lab. In 2004, it was labeled the fastest supercomputer in the world; and only needed a fraction of the power needed to use its competitors. In 2009 Barrack Obama gave them the National Medal of Technology Innovation which is one of the most prestigous awards in all of technology.",
      media: {
        source: {
          url:"https://www.youtube.com/embed/gUqQKLA75tY?si=QVA8-YZUpdb6Rhd-"
        },
        type: "VIDEO",
        title: "Obama Presents The National Medal of Technology Innovation",
      }
    },
    {
      title: "Later Life",
      cardTitle: "Teaching",
      cardDetailedText: "In 2013, Mark Dean left IBM. He returned to the University of Tenessee to teach; and he is now the John Fisher Distinguished Professor in its Department of Electrical Engineering and Computer Science. He now owns over 20 patents, the most recent being from 2019 and relating to AI and artificial neural networks.",
      media: {
        source: {
          url:"https://our.tennessee.edu/wp-content/uploads/2017/01/Dean-Mark.jpg"
        },
        type: "IMAGE",
        title: "Mark Dean At The University Of Tenessee",
      }
    }
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: "#0f62fe",
        secondary: "#82cfff",
        cardTitleColor: "#0f62fe",
        titleColor: "#000000",
        titleColorActive: "#000000",
        cardForeColor: "#82cfff",
        cardMediaBgColor: "#e5f6ff",
        cardBgColor: "#e5f6ff"
      }}
    />
  );
}

export default App;
