import React from  "react";
import "./Fallback.css";

 const Fallback =({error})=>{
    return(
        <section className="fallback">
        <header className="fallback__header">
          <h3 className="fallback__title">Oops! An error occured!</h3>
        </header>
        <hr className="hrfix"
        />
        <div className="fallback__body">
          <p>
            <strong>Error:</strong> {error.toString()}
          </p>
        </div>
      </section>

 )}


export default Fallback;