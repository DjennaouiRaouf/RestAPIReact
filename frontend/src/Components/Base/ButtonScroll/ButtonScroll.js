import React from "react";

function ButtonScroll () {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
            <button onClick={scrollToTop} className="btn btn-primary pulse-grow-on-hover pulse" type="button" style={{"fontSize": "20px",
                "borderRadius": "15px",
                "position": "fixed",
                "bottom": "20px",
                "right": "30px",
                "zIndex": "99"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                     className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </button>
        )
}

export default ButtonScroll;
