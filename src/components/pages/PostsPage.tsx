import React, { useState } from "react"
import { Header } from "../Header/Header"
import { Posts } from "../Posts/Posts"

export function PostPage() {
    const [valueInputSearch, setValueInputSearch] = useState('')

    const search = (str = '')=> {
        setValueInputSearch(str)
    }

    return (
        <>
            <Header onSearch={search}/>
            <div className="wrapper">
                <Posts valueInputSearch={valueInputSearch}/>
            </div>
       </>
    )
}
