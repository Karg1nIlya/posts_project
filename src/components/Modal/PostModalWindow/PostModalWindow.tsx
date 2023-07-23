import React from "react"
import "./postModalWindow.scss"
import { IPost } from "../../../models/IPost"

interface IPostModalWindow {
    data: IPost; 
    onClose: ()=>void
}

export function PostModalWindow({data, onClose}: IPostModalWindow) {  
    
    return (
        <div className="post-modal">
            <button className="post-modal__close-btn" onClick={onClose}>x</button>
            <div className="post-modal__img">
                <img src={data.img} srcSet={`${data.img_2x} 2x`}/>
            </div>
            <div className="post-modal__tag">{data.tags}</div>
            <div className="post-modal__title">{data.title}</div>
            <div className="post-modal__info">
                <ul>
                    <li>{data.autor}</li>
                    <li>{data.date}</li>
                    <li>{data.views} Views</li>
                </ul>
            </div>
            <div className="post-modal__text">
                {data.text}
            </div>
        </div>
    )
}
