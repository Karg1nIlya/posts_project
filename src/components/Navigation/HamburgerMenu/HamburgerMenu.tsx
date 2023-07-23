import React from "react"
import "./hamburgerMenu.scss"
import { HamburgerMenuItem } from "./HamburgerMenuItem"
import { navContent } from "../navigationContent"
import { burgerImg, crossImg, logoImg } from "../../../data/dataImg"

export function HamburgerMenu() {
    const closeMenu = ()=> {
        (document.getElementById('menu__toggle') as HTMLInputElement).checked = false
    }

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="hamburger-btn" htmlFor="menu__toggle">
                <img src={burgerImg} alt="burgerImg" />
            </label>
            <div className="hamburger-menu__container" onClick={closeMenu}></div>
            <div className="hamburger-menu__box">
                <div className="hamburger-menu__box-header">
                    <img className="hamburger-menu__logo" src={logoImg} alt="logo" />
                    <img className="hamburger-menu__close-btn" onClick={closeMenu} src={crossImg} alt="cross" />
                </div>
                <div className="hamburger-menu__box-list">
                    {navContent.map((el, i)=>{
                        return (
                            <HamburgerMenuItem data={el} key={i}/>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}
