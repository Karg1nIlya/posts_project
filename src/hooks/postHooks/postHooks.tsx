import { useEffect, useState } from "react"
import { IPost } from "../../models/IPost"
import axios from 'axios'

const url = 'https://cloud.codesupply.co/endpoint/react/data.json'

export function postHooks() {
    const [posts, setPosts] = useState<IPost[]>([])
    const [searchingPosts, setSearchingPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState(false)

    async function getPosts() {
        try {
            setLoading(true)
            const response = await axios.get<IPost[]>(url)
            setPosts(response.data)
            setSearchingPosts(response.data)
            setLoading(false)
        } 
        catch (e: unknown) {
            console.log(e)
            setLoading(false)
        }
    }

    function searchPosts(str = '') {
        let postsTmp = posts
        if(str !== '') {
            postsTmp = posts.filter(el=>{
                if(el.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()) || el.text.toLocaleLowerCase().includes(str.toLocaleLowerCase())) {
                    return el
                }
            })
        }
        setSearchingPosts(postsTmp)
    }

    useEffect(()=> {
        getPosts().catch(()=>console.log('error'))
    },[])

    return { searchingPosts, loading, searchPosts }
}
