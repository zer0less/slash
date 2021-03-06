import styles from '../../styles/Home.module.css'
import React from 'react'
import {useEffect} from "react"

function support() {
    
}

export default function Footer() {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.footerItems}>
                <h2>Other Projets</h2>
                <a>None Yet :(</a>
            </div>
            <div className={styles.footerItems}>
                <h2>Company</h2>
                <a>About</a>
                <a>Privacy</a>
            </div>
        </div>
        <div className={styles.supportFooter}>
            <button className={[styles.footerBtn, styles.supportBtn].join(" ")}><span>Support</span><i></i></button>
            <button className={[styles.footerBtn, styles.subscribeBtn].join(" ")}><span>Subscribe</span><i></i></button>
        </div>
        <div className={styles.about}>
            <span>Created & Powered by SlashDEV</span>
            <span>&copy; SlashDEV, Inc.</span>
        </div>
        </>
    )
}