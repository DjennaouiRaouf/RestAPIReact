import React from "react";
import NavBar from "../../Base/NavBar";
import Card from "../../Base/Cards/Card";
import Card1 from "../../Base/Cards/Card1";
import Card2 from "../../Base/Cards/Card2";
import Card3 from "../../Base/Cards/Card3";
import TimeLine from "../../Base/TimeLine";
import Foot from "../../Base/Foot";
import ButtonScroll from "../../Base/ButtonScroll";
function Cv () {
 return(
            <div>
                <NavBar/>
                <Card3/>
                <TimeLine/>
                <Card/>
                <Card2/>
                <Card1/>
                <Foot/>
                <ButtonScroll/>
            </div>

        );
}

export default Cv;
