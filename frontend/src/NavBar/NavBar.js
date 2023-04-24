
import React, { useState,useEffect } from 'react';
import { useHistory,Link} from 'react-router-dom';
import axios from 'axios';
import config from '../config.json';

function NavBar() {
  const [avatar, setAvatar] = useState(null);
  const history = useHistory();


  useEffect(() => {

    axios.get(`${config.apiUrl}/avatar`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const goToCvScroll = (elemId) => {
     var elem = document.getElementById(elemId);
     //elem.scrollIntoView();
  };

  const switch_page =() => {
        //history.push("/")
  }


return(
    <div id="nav">

            <nav className="navbar navbar-light navbar-expand-md py-3" style={{"background": "rgb(236,241,244)"}}>
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span
             style={{"fontSize": "16px"}}>

                    <img src={"avatar.image"} width="51" alt="" height="51"/>
                    <strong><em>&nbsp;{"avatar.username"}</em></strong></span></a>


             <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                 className="visually-hidden">Toggle navigation</span><span
                 className="navbar-toggler-icon"></span></button>
             <div className="collapse navbar-collapse" id="navcol-1">
                 <ul className="navbar-nav me-auto">
                     <li className="nav-item ">
                         <div className="dropdown show">
                             <Link className="nav-link dropdown-toggle float-on-hover" aria-expanded="true"
                                   data-bs-toggle="dropdown" to="#" onClick={switch_page()}>Cv</Link>
                             <div className="dropdown-menu " data-bs-popper="none" style={{"background": "rgb(236,241,244)"}}>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("prof")}>Profil</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("p")}>Parcours</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("Langage De Programmation")}>Langage de programmation</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("Systeme de Gestion de Base de Données")}>Base de données</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("Outils de Developpement")}>Outils de developpement</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("Systemes d'exploitations")}>Systemes d'exploitations</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("proj")}>Projets</Link>
                                 <Link className="dropdown-item float-on-hover"  to="#" onClick={goToCvScroll("lng")}>Langues</Link>
                             </div>

                         </div>
                     </li>
                     <li className="nav-item "><Link className="nav-link float-on-hover" to="/information">Informations</Link></li>
                 </ul>
             </div>
         </div>
     </nav>


    </div>

    );
}


export default NavBar;
