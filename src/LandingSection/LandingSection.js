import React from 'react'
import classes from './LandingSection.module.css'
import arrowup from '../assets/arrow-up.png'
import arrowdown from '../assets/arrow-down.png'
import LandingSectionImage from '../assets/landing-section-image.png'



const LandingSection = () => {
    return(
        <div className={classes.MainContainer}>
        <div className={classes.LandingSectionLeft}>
            <p className={classes.MainText}>
                Stunning Workplace.
            </p>

            <p className={classes.Description}>
                With Stunning, remote teams can organize projects, manage shifting priorities, and get work done.
            </p>

            <div className={classes.BtnContainer}>
                <button className={classes.NewAccountBtn}>New Account</button>
                <img className={classes.Arrows} src={arrowup}/>
                <img className={classes.Arrows} src={arrowdown}/>
            </div>
        </div>
        <div className={classes.LandingSectionRight}>
            <img className={classes.LAndingSectionImage} src={LandingSectionImage}/>
        </div>
    </div>
    )
} 

export default LandingSection;