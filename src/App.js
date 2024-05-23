import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import React from 'react';
import { Chrono } from 'react-chrono'; 

function App() {
  const items = [
    {
      title: "March 1957",
      cardTitle: "Mark Dean Is Born",
      cardSubtitle: "He's Important For This So Pay Attention",
      cardDetailedText: "Mark Dean was born in Jefferson City, Tennessee.",
      media: {
        source: {
          url:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Downtown_Jefferson_City_looking_west.jpg"
        },
        type: "IMAGE",
        title: "Jefferson City, Tennessee"

      }
    },
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      highlightCardsOnHover={true}
    />
  );
}

export default App;
