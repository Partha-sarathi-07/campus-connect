import UserDetail from "./UserDetail";
import likeIcon from '../assets/heart.png'
import disLikeIcon from '../assets/heartFilled.png'
import openCommentIcon from '../assets/chat.png'
import closeCommentIcon from '../assets/chatFilled.png'
import saveIcon from '../assets/save.png'
import removeSaveIcon from '../assets/saveFilled.png'
import { useState } from "react";
import type { PostType } from "../types/PostType";
import ActionItem from "./ActionItem";

export default function Post(props:PostType) {

    function getImageType(base64: string):string {
        if (base64.startsWith('/9j/'))
            return 'image/jpeg'
        else if (base64.startsWith('iVBOR'))
            return 'image/png'
        else if (base64.startsWith('R0lGOD'))
            return 'image/gif'
        else if (base64.startsWith('UklGR'))
            return 'image/webp'
        return 'image/*';
    }

    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [saved, setSaved] = useState(false)

    function handleLike(): void {
        setLike(prev => !prev)
    }
    function handleComment(): void {
        setComment(prev => !prev)
    }

    function handleSave(): void {
        setSaved(prev => !prev)
    }

    return (
        <div className="flex flex-col border-1 border-[#656565] rounded-3xl px-[35px] pt-[35px] pb-[20px] mb-[20px]">
            <UserDetail 
                username={props.user.username} 
                fullname={props.user.fullname} 
                profilePhoto={props.user.profilePhoto}
                isTimeNeeded={true}
            /> 

            <div className="flex flex-col mt-5 pl-10 gap-4">
                <p>{props.postDescription}</p>
                <img 
                    className="rounded-2xl w-full h-[22.5vw]"
                    src={`data:${getImageType(props.postImage)};base64,${props.postImage}`} 
                    alt="post image" />

                <div className="flex justify-between list-none px-4">
                    <ActionItem
                        active={like}
                        activeIcon={likeIcon}
                        inActiveIcon={disLikeIcon}
                        label="Like"
                        handleClick={handleLike}
                    />

                    <ActionItem
                        active={comment}
                        activeIcon={openCommentIcon}
                        inActiveIcon={closeCommentIcon}
                        label="Comment"
                        handleClick={handleComment}
                    />

                    <ActionItem
                        active={saved}
                        activeIcon={saveIcon}
                        inActiveIcon={removeSaveIcon}
                        label="Save"
                        handleClick={handleSave}
                    />
                </div>
            </div>
        </div>
    )
}