import React from "react";
import "./BoxGrid.css";

const data = [
  {  title: "طراح و توسعه دهنده وب",
     content: "دارای مهارت در طراحی و توسعه وبسایت همراه با بهترین کیفیت و جدید ترین متد دنیا" ,
     
     icons: ["/image/code.svg"], // فقط یک آیکون
     link: null


    },

  {  title: "دانش های پایه",
     content: "دارای دانش کامل از مهارت های پایه و سه گانه طراحی سایت به صورت نخصصی",
     icons: ["/image/css3-shiled.svg", "/image/html5.svg", "/image/java-script.svg"], // این یکی ۳ آیکون داره
     link: null

    },
  {  title: "Node.js & React",
     content: " تسلط کامل بر این دو . اپدیت شدن همراه با اپدیت هایشان و طراحی اصلی با ریکت",
     icons: ["/image/react.svg" , "/image/node-js.svg"], // فقط یک آیکون
     link: null

    },
  {  title: " Git & GitHub",
     content: "دارای اکانت و نمونه کار های مختلف در گیت هاب",
     icons: ["/image/github.svg"], // فقط یک آیکون
     link: "https://github.com/sahandvince"
    },
];


const BoxGrid = () => {
    return (
      <div className="container">
        <h1 className="title"> Sahand Vince</h1>
        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="box">
              <div className="icon-row">
                {item.icons.map((iconUrl, i) => (
                  <img
                    key={i}
                    src={iconUrl}
                    alt={`icon-${i}`}
                    className="icon-small"
                  />
                ))}
              </div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              {index === 3 && item.link && (
              <a href={item.link} className="github-button" target="_blank" rel="noopener noreferrer">
                 GitHub 
              </a>
            )}
            </div>
          ))}
        </div>
      </div>
    );
  };
 

export default BoxGrid;
