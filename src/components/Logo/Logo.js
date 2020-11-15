import React from 'react';
import styles from './Logo.module.css'
import imageLogo from '../../assets/images/burger-logo.png'

const Logo = (props) => (
     <div className={styles.Logo}>
         <img src={imageLogo} alt="Logo"></img>
     </div>
)

export default Logo;
