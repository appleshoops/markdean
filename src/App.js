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
      title: "Biggest Breakthrough",
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
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
    />
  );
}

export default App;
