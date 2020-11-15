import React from 'react';
import Logo from '../Logo/Logo'

import styles from "./Toolbar.module.css"

const Toolbar = (props) => (
         <header className={styles.Toolbar}>
            <div>Demo Project</div>
            <Logo />
           <nav>

           </nav>
         </header>
)

export default Toolbar