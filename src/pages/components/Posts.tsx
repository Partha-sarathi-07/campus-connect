import Post from "../../components/Post";
import type { PostType } from "../../types/PostType";

export default function Posts({posts}: {posts: PostType[]}) {
    const postsElements = posts.map(post => <Post key={post.postId} {...post} />)
    
    return(
        <div className="p-[30px] mt-[6vw] border-x border-b w-[42.5vw]">
            {postsElements}
        </div>
    )
}