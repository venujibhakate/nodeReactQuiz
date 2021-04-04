import React from 'react';
import "./Question.css";


const Question = ({ question, options , Images , selected ,status}) => {

   return (
      
           <div className="main">
                {/* <h1 class="userName">Hii {value}!!</h1> */}
        {/* //     {Images.map((Image, i) => ( */}
        {/* //         <img src={Image} />
        //       ))} */}

           <div className="question">{question}</div>
          <div className="card_image"><img style={{width: "340px", height: "240px"}}  src={Images} /></div> 
          <div className="points"> {status} </div> 
          <div className="optionsBtn">
        {options.map((text, i) => (
           
         <button
              key={i}
              className="btn"
              onClick={() => {
               selected(text);
              }}
              > {text}
              
         </button>
      
       
        ))}

{/* <div className="points"> {status} </div> */}
           </div>
           {/* <div className="points">
				Your points  {point} 
			
		     </div> */}
        
        </div>

  
       
        
    )
}
export default Question;