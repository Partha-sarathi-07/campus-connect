import { useEffect, useState } from "react";
import Comments from "./components/Comments";
import LeftBar from "./components/LeftBar";
import Posts from "./components/Posts";
import SearchBar from "./components/SearchBar";
import type { PostType } from "../types/PostType";
import AddPost from "./components/AddPost";

export default function HomePage() {
    let [posts, setPosts] = useState<PostType[] | null>(null);
    let [isPostClicked, setIsPostClicked] = useState<boolean>(false);
    useEffect(() => {
        fetch("http://localhost:8080/api/posts")
            .then(resp => resp.json())
            .then(data => {
                setPosts(data.content)
            })
    },[])
    
    useEffect(() =>{
        document.body.style.overflow=isPostClicked?'hidden': 'auto'
        return() =>{
            document.body.style.overflow='auto'
        }
    },[isPostClicked])
    
    return(
        <>
            {
                isPostClicked &&
                <AddPost closeAddPost={setIsPostClicked}/>
            }
            <LeftBar handlePostClicked={setIsPostClicked}/>
            <div className="flex flex-col ml-[22.5vw]">
                <SearchBar />
                {
                    posts &&
                    <Posts posts = {posts}/>
                }
            </div>
            <Comments />
        </>
    )
}