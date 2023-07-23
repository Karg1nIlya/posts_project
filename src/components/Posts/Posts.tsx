import React, { useEffect, useState } from "react"
import "./posts.scss"
import { PostItem } from "./PostItem/PostItem"
import { postHooks } from "../../hooks/postHooks/postHooks"
import { Modal } from "../Modal/Modal"
import { PostModalWindow } from "../Modal/PostModalWindow/PostModalWindow"
import { IPost } from "../../models/IPost"

interface IPosts {
    valueInputSearch: string
}

export function Posts({valueInputSearch}: IPosts) {
    const [modalVisible, setModalVisible] = useState(false)
    const [post, setPost] = useState<IPost>()
    const { searchingPosts, searchPosts, loading} = postHooks()

    useEffect(()=>{
        searchPosts(valueInputSearch) 
    }, [valueInputSearch])

    const openModal = (post: IPost)=> {
        setModalVisible(true)
        setPost(post)
    }

    return (
        <>
            {modalVisible && post &&
                <Modal onClose={()=>setModalVisible(false)}>
                    <PostModalWindow data={post} onClose={()=>setModalVisible(false)}/>
                </Modal>
            }
            <div className="posts">
                {loading && 
                    <div className="loading">Loading...</div>
                }
                {searchingPosts.map((el, i)=>
                    {
                        return (
                            <PostItem data={el} onOpenModal={openModal} key={i}/>
                        )
                    })
                }
            </div>
        </>
    )
}
