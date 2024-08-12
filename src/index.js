import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className="sizer" src={img + "?grayscale"} alt="rnadom" />

      <img
        className="sizer"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxocPE9uwKuuDtWqVB8XkpcARe3clvCwA9FFy6aPBOYj1qSBSw3-zNdddydpFz9LlpNLNa6KX47-aGYZGwRQzRwCRB3RF8pAkJ-Gl_OxRbyfOKlXtIoApShv8epV5Vp5DLqjG7PcqnbVA2-lXP1WUK35YysPRC2FrBkygvg4sXMkG0xdYY1PmV853lCQ/w400-h225/nature-collection-best-photos-imgs.jpg"
        alt="forest"
      />
      <img
        className="sizer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y6N13YaCT25koAtECcbPRSgEySDGwuHZ6UACZd6B61ZsgbdYpGoUFbFvqTob28OcCro&usqp=CAU"
        alt="jungle"
      />
    </div>
  </div>,
  document.getElementById("root")
);
