import React from "react";
import './chairman.css';
import img1 from '../assets/waghsir.jpg'
import img2 from '../assets/DR-_1.jpg'

const ChairmanCards = () => {
  const cardData = [
    {
      name: "Hon'ble Dr.Sudhir Tambe",
      designation: "Hon'ble Chief Minister",
      image:img2
    },
    {
      name: "Dr. B.D.Wagh",
      designation: "I/C Principal",
      image: img1
    },
    {
      name: "Shri. Ajit Pawar",
      designation: "Hon'ble Deputy CM",
      image: "/imgi_6_Wagh%20Sir.jpg"
    },
    {
      name: "Dr. Dhanraj Mane",
      designation: "Director, Higher Education",
      image: "/imgi_6_Wagh%20Sir.jpg"
    },
  ];

  return (
    <div className="chairman-section">
      <h2 className="section-heading">Our Esteemed Chairpersons</h2>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="chairman-card" key={index}>
            <div className="image-container">
              <img src={card.image} alt={card.name} className="chairman-image" />
            </div>
            <div className="chairman-name">{card.name}</div>
            <div className="designation">{card.designation}</div>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChairmanCards;
