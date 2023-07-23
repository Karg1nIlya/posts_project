import React, { useEffect, useState } from "react"
import "./header.scss"
import { Navigation } from "../Navigation/Navigation"
import { HamburgerMenu } from "../Navigation/HamburgerMenu/HamburgerMenu"
import { logoImg, searchImg } from "../../data/dataImg"

interface IHeader {
    onSearch: (str?: string)=>void
}

export function Header({onSearch}: IHeader) {
    const [clearInputVisible, setClearInputVisible] = useState(false)
    const [inputVal, setInputVal] = useState('')

    useEffect(()=>{
        let prevScrollpos = window.scrollY
        window.onscroll = function() {
            const currentScrollPos = window.scrollY
            const height = (document.getElementById("header") as HTMLElement).scrollHeight 
            if (prevScrollpos > currentScrollPos) {
                (document.getElementById("header") as HTMLElement).style.top = "0"
            } else {
                (document.getElementById("header") as HTMLElement).style.top = `-${height}px`
            }
            prevScrollpos = currentScrollPos
        }

        document.body.addEventListener('click', (ev)=> {
            handleClick(ev)
        })

    },[])

    const handleClick = (ev: any) => {
        if(ev.target.closest('.header__search-input') === null && inputVal === '' && ev.target.closest('.header__search-img') === null) {
            (document.querySelector('.header__search-input') as HTMLElement).style.visibility = 'hidden'
        }
    }

    const changeInput = (event: React.FormEvent<HTMLInputElement>) => {
        setInputVal(event.currentTarget.value)
        const length = event.currentTarget.value.length
        if(length===0) {
            setClearInputVisible(false)
        }
        else {
            setClearInputVisible(true)
        }
        onSearch(event.currentTarget.value)
    }

    const openSearch = () => {
        (document.querySelector('.header__search-input') as HTMLElement).style.visibility = 'visible'
    }

    return (
        <header id="header" className="header">
            <div className="header__wrapper">
                <div className="header__menu">
                    <HamburgerMenu/>
                </div>
                <img src={logoImg} alt="logo"/>
                <div className="header__search">
                    <img className="header__search-img" src={searchImg} alt="searchImg" onClick={openSearch}/>
                    <div className="header__search-input">
                        <input type="text" placeholder="Поиск..." value={inputVal} onChange={changeInput}/>
                        <div className="header__search-clear-btn" onClick={()=>{
                            setInputVal('') 
                            onSearch()
                            setClearInputVisible(false)
                        }}>{clearInputVisible ? 'x':' '}</div>
                        <img src={searchImg} alt="searchImg" />
                    </div>
                </div>
            </div>
            <div className="header__nav">
                <Navigation/>
            </div>
        </header>
    )
}
