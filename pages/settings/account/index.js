import Head from 'next/head'
import style from '../Profile.module.css'
import React from 'react'
import Link from 'next/link'

export default function AccountPage() {
    return (
        <>
        <Head>
            <title>Account</title>
        </Head>
        <div className={style.dataContent}>
          <div className={style.contentArea}>
            <div className={style.content}>
              <div className={style.setting}>Settings</div>
              <Link className={style.link} href="../settings/profile"><div className={style.cont}><a className={style.links}>Profile</a></div></Link>
              <div className={[style.cont, style.current].join(" ")}><a>Account</a></div>
              <Link href="../settings/security"><div className={[style.cont, style.last].join(" ")}><a>Security</a></div></Link>
            </div>
          </div>
          <div className={style.meDataArea}>
            <strong className={style.titleData}>Account</strong><hr />
            <div className="meData">
              <div className={style.settingArea}>
                <strong>Username</strong>
                <input type="text" className={style.input} />
              </div>
              <div className={style.settingArea}>
                  <strong>Name</strong>
                  <span><input type="text" className={style.input} /><input type="text" className={style.input} /></span>
              </div>
              <div className={style.settingArea}>
                <strong>Date of Birth</strong>
                <input type="date" className={style.input} />
              </div>

              <div>
                <button type="submit" className={[style.saveProfile, style.button].join(" ")}>Save Account</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}