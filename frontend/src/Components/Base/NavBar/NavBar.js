import React, {useState, useEffect} from 'react';
import { useHistory,Link} from 'react-router-dom';
import axios from 'axios';
import config from '../../../config.json';
import empty_avatar from './avatar_empty.png';

function NavBar() {
  const [avatar, setAvatar] = useState({});
   const [types, setTypes] = useState([]);
  const history = useHistory();

  useEffect(() => {

    axios.get(`${config.apiUrl}/avatar/`)
      .then((response) => {
         setAvatar(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`${config.apiUrl}/type/`)
      .then((response) => {
        setTypes(response.data);

      })
      .catch((error) => {
        console.log(error);

      });






  });

  const goToCvScroll = (elemId) => {
      console.log(elemId)
    const myDiv = document.getElementById(elemId);
    myDiv.scrollIntoView({ behavior: 'smooth' });
  };

  const switch_page =() => {
        history.push("/")
  }

  const admin =() => {
        window.location.href=`${config.mediaUrl}/admin`
  }

  if(Object.keys(avatar).length !== 0) {

      return (

          <div id="nav">

              <nav className="navbar navbar-light navbar-expand-md py-3" style={{"background": "rgb(236,241,244)"}}>
                  <div className="container">

                      <div className="navbar-brand d-flex align-items-center">

                        <span
                            style={{"fontSize": "16px"}}>
                       <img src={`${config.mediaUrl}` + avatar.image} width="51" alt="" height="51"/>

                        <img src={empty_avatar} width="51" alt="" height="51"/>
                        <strong><em>&nbsp;{avatar.user_id}</em></strong>

                </span></div>

                      <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                          className="visually-hidden">Toggle navigation</span><span
                          className="navbar-toggler-icon"></span></button>


                      <div className="collapse navbar-collapse" id="navcol-1">
                          <ul className="navbar-nav me-auto">
                              <li className="nav-item ">
                                  <div className="dropdown show">
                                      <Link className="nav-link dropdown-toggle float-on-hover" aria-expanded="true"
                                            data-bs-toggle="dropdown" to="#" onClick={switch_page}>Cv</Link>
                                      <div className="dropdown-menu " data-bs-popper="none"
                                           style={{"background": "rgb(236,241,244)"}}>
                                          <Link className="dropdown-item float-on-hover" to="#"
                                                onClick={()=>goToCvScroll("prof")}>Profil</Link>
                                          <Link className="dropdown-item float-on-hover" to="#"
                                                onClick={()=>goToCvScroll("p")}>Parcours</Link>

                                            {types.map((t,k) => (
                                                 <Link className="dropdown-item float-on-hover" to="#"
                                                onClick={()=>goToCvScroll(t.type)}>{t.type}</Link>
                                            ))}



                                          <Link className="dropdown-item float-on-hover" to="#"
                                                onClick={()=>goToCvScroll("proj")}>Projets</Link>
                                          <Link className="dropdown-item float-on-hover" to="#"
                                                onClick={()=>goToCvScroll("lng")}>Langues</Link>
                                      </div>

                                  </div>
                              </li>
                              <li className="nav-item "><Link className="nav-link float-on-hover"
                                                              to="/information">Informations</Link></li>
                          </ul>
                          <button className="btn btn-primary" type="button" onClick={admin}><i className="far fa-user"
                                                                                               style={{"marginRight": "7px"}}></i>Admin
                          </button>
                      </div>
                  </div>
              </nav>
          </div>
      );
  }
}


export default NavBar;
