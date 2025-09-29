import UserDetail from "./UserDetail";
import post from '../../public/post1.jpg'
import like from '../assets/heart.png'
import comment from '../assets/chat.png'
import save from '../assets/save.png'

export default function Post() {
    return (
        <div className="flex flex-col border-1 border-[#656565] rounded-3xl px-[35px] pt-[35px] pb-[20px] overflow-y-scroll mb-[20px]">
            <UserDetail /> 
            <div className="flex flex-col mt-5 pl-10 gap-4">
                <p>Just wrapped up my final year project on AI-based Sign Language Recognition. 🚀 Super excited to see it in action!</p>
                <img 
                    className="rounded-2xl"
                    src={post} 
                    alt="post image" />
                <div className="flex justify-between list-none">
                    <li className="flex gap-2 items-center">
                        <img    
                            className="w-[20px] h-[20px]"
                            src={like} 
                            alt="heart image"
                        />
                        <span className="text-[#555] font-medium">Like</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img    
                            className="w-[20px] h-[20px]"
                            src={comment} 
                            alt="chat image"
                        />
                        <span className="text-[#555] font-medium">Comment</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img    
                            className="w-[20px] h-[20px]"
                            src={save} 
                            alt="save image"
                        />
                        <span className="text-[#555] font-medium">Save</span>
                    </li>

                </div>
            </div>
        </div>
    )
}