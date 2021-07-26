import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./Header.css";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {/* {backButton ? (
        <IconButton onclick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header-icon" fontSize="large" />
        </IconButton>
      )} */}
      <Link to="/">
        <SportsTennisIcon className="tennis-icon" fontSize="large" />
      </Link>
      <Link to="/">
        <SportsTennisIcon className="tennis-icon" fontSize="large" />
      </Link>
      <Link to="/">
        <SportsTennisIcon className="tennis-icon" fontSize="large" />
      </Link>
      {/* <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link> */}
    </div>
  );
}

export default Header;
