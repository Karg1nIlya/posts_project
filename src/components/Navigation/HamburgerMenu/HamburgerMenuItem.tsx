import React, { useState } from "react"
import { INavContent } from "../../../models/IPost"
import { chevronImg } from "../../../data/dataImg"

interface IHamburgerSubMenu {
    data: INavContent
}

export function HamburgerMenuItem({data}: IHamburgerSubMenu) {
    const [subMenuVisible, setSubMenuVisible] = useState(false)

    return (
        <div className={`hamburger-menu-item${data.subMenu.length === 0 ? '--empty' : ''}`}>
            <div className="hamburger-menu-item__name" onClick={()=>{
                setSubMenuVisible(!subMenuVisible)
            }}>
                <strong className="hamburger-menu-item__title">{data.name}</strong>
                {data.subMenu.length!==0 && <img src={chevronImg} alt="chevronImg" />}
            </div>
            {data.subMenu.length!==0 && 
                <>
                {subMenuVisible && 
                    <div className="hamburger-submenu">
                        {data.subMenu.map((el,i)=>{
                            return (
                                <div className="hamburger-submenu-item" key={i}>
                                    <strong className="hamburger-submenu-item__title">{el}</strong>
                                    <img src={chevronImg} alt="chevronImg" />
                                </div>
                            )
                        })}
                    </div>
                }
                </>
            }
        </div>
    )
}
