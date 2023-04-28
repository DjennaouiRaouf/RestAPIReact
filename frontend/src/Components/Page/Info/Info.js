import React from "react";
import NavBar from "../../Base/NavBar";
import Foot from "../../Base/Foot";
import ButtonScroll from "../../Base/ButtonScroll";
import Information from "../../Base/Information";
function Info () {
  return(
            <div id="AboutMe">
                <NavBar/>
                <Information/>
                <Foot/>
                <ButtonScroll/>
            </div>
        );
}

export default Info;
