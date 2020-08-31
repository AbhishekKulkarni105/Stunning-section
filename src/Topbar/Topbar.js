import React from 'react';
import stunninglogo from '../assets/stunning-logo.png';
import classes from './Topbar.module.css';



const Topbar = () =>{
    return (
        <div className={classes.MainContainerTopbar}>
        <header className={classes.Topbar}>
       <span>
        <img className={classes.Logo} src= {stunninglogo}  alt ="logo"/>
        </span>
        <nav>

        <span className={classes.Menu}>Home</span>
        <span className={classes.Menu}>About</span>
        <span className={classes.Menu}>Blog</span>
        <span className={classes.Menu}>jobs</span>
        
        </nav>
        <button className={classes.Account}>Your Account</button>
        <div className={classes.MenuToggleIcon}>
        <i class="fas fa-bars"></i>
        </div>
        </header>
        
            </div>






        
    )
}

export default Topbar;