import React from 'react';

const Card = ({imgUrl,title,text}) => {

    return (
  
      <div className="feature-item">
        <img src={imgUrl} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p> {text}</p>
      </div>
 )

}
export default Card;
//"./img/icon-chat.png"