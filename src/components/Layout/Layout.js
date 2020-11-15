import React from 'react'
import Auxx from '../../hoc/Auxx'
import styles from './Layout.module.css'
import Toolbar from '../Toolbar/Toolbar'

const layout = (props) => (
    <Auxx>
        <Toolbar/>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Auxx>

)
export default layout;
