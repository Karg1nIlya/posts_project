import React from "react"
import "./navigation.scss"
import { navContent } from "./navigationContent"
import { chevronImg } from "../../data/dataImg"

export function Navigation() {
    return (
        <nav className="navigation">
            {navContent.map((el, i)=> {
                return (
                    <div className={`menu-item${el.subMenu.length === 0 ? '--empty' : ''}`} key={i}>
                        <strong className="menu-item__title">{el.name}</strong>
                        {el.subMenu.length!==0 && 
                        <>
                            <img src={chevronImg} alt="chevronImg" />
                            <div className="submenu">
                                {el.subMenu.map((content, j)=>{
                                    return (
                                        <div className="submenu-item" key={j}>
                                            <strong className="submenu-item__title">{content}</strong>
                                            <img src={chevronImg} alt="chevronImg" />
                                        </div>
                                    )})
                                }
                            </div>
                        </>
                        }
                    </div>
                )})
            }
        </nav>
    )
}
