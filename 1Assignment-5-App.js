import React from 'react';
import './App.css';
import './demo.css';

import image1 from './img/1-image.jpg';

function App() {
  let usersArray =  [
    {"id":1,"first_name":"George","last_name":"Bluth","avatar":image1,"designation":"Neurosurgeon","rating":4},
    {"id":2,"first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg","designation":"Cardiologist","rating":5},
    {"id":3,"first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg","designation":"Surgeon","rating":3},
    {"id":4,"first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg","designation":"Dentist","rating":2},
    {"id":5,"first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg","designation":"Eye Specialist","rating":4},
    {"id":6,"first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","designation":"Urology","rating":4},
    {"id":7,"first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","designation":"Neurosurgeon","rating":4},
    {"id":8,"first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","designation":"Neurosurgeon","rating":4},
  ];

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span className="star">&#9733;</span>);
    }
    return stars;
  };

  let resultsArray = usersArray.map((item, index) => (
    <div className='card' key={index}>
      <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} /><br />
      <span className="name">{item.first_name + " " + item.last_name}</span><br />
      <span className="designation">{item.designation}</span><br />
      {generateStars(item.rating)} <br/>
      <button className="button123">BOOK APPOINTMENT</button>
    </div>
  ));
  
return (
    <>
   <h1 style={  {color:"red", padding:"5px", textAlign:"center"}  }>Assignment Reference Image</h1>
        {resultsArray}    

    </>
);
}
export default App;
