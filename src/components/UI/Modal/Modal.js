import React from 'react'
import styles from './Modal.module.css'
import Auxx from '../../../hoc/Auxx'
import Backdrop from '../BackDrop/Backdrop'


const Modal = (props) => (
    <Auxx>
        <Backdrop show = {props.show} onClicked = {props.modalClosed}>
        </Backdrop>
    <div className = {styles.Modal}
        style = {{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
    > 
        {props.children}
        
        
    </div>
    </Auxx>
)

export default Modal;