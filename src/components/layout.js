import * as React from 'react'
import { Link } from 'gatsby'
import {container, heading, navLinks, navlinkItem, navLinkText} from "./layout.module.css"

export default function Layout ({children, titulo}){
    return(
        <div className={container}>
            <hr />
            <nav>
                <ul className={navLinks}>
                    <li className={navlinkItem}><Link to ="/">Inicio</Link></li>
                    <li className={navlinkItem}><Link to ="/about">Sobre</Link></li>
                </ul>
            </nav>
            <hr />
            <main>
                <h1>{titulo}</h1>
                {children}
            </main>
            <div style={{backgroundColor:"blue"}}>
                <p>Rodapé</p>
            </div>
        </div>
    )
}