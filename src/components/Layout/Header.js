import { Fragment } from "react";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.bigblue}>
        <button>HOME</button>
        <button>STORE</button>
        <button>ABOUT</button>
      </header>
      <header className={classes.bigblue}>
        <h1>The Generics</h1>
      </header>
    </Fragment>
  );
};

export default Header;
