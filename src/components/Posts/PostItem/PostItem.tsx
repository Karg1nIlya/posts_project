import React from "react"
import "./postItem.scss" 
import { IPost } from "../../../models/IPost"

interface IPostItem {
    data: IPost; 
    onOpenModal: (post: IPost)=>void
}

export function PostItem({data, onOpenModal}: IPostItem) {

    return (
        <div className="post-item" onClick={()=>onOpenModal(data)}>
            <div className="post-item__img">
                <img src={data.img} srcSet={`${data.img_2x} 2x`}/>
            </div>
            <div className="post-item__tag">{data.tags}</div>
            <div className="post-item__title">{data.title}</div>
            <div className="post-item__info">
                <ul>
                    <li className="post-item__info-item">{data.autor}</li>
                    <li className="post-item__info-item">{data.date}</li>
                    <li className="post-item__info-item">{data.views} Views</li>
                </ul>
            </div>
            <div className="post-item__text">
                {data.text}
            </div>
        </div>
    )
}
