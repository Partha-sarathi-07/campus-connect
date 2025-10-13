import React, { useState } from "react";
import UserDetail from "../../components/UserDetail";

export default function AddPost({postClicked, closeAddPost}: {postClicked: boolean, closeAddPost: React.Dispatch<React.SetStateAction<boolean>>}) {
    const ref = React.useRef<HTMLFormElement>(null);
    const inputRef = React.useRef<HTMLTextAreaElement>(null);        
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [imageName, setImageName] = useState<String>("No Image Chosen");
    const [cancelPost, setCancelPost] = useState<boolean>(false)

    React.useEffect(() => {
        if (inputRef.current)
            inputRef.current?.focus();
    },[])

    React.useEffect(() => {
        const checkIfClickedOutside = (e:MouseEvent) => {
            if (postClicked && ref.current && !ref.current.contains(e.target as Node)) {
                console.log("hii");
                
                closeAddPost(false)
            }
        }
        document.addEventListener('mousedown', checkIfClickedOutside)
        return() => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    },[postClicked])
    function handleImageSelecting(): void {
        if (fileInputRef.current) 
            fileInputRef.current?.click();
    }

    function handleSelectedImage(e: React.ChangeEvent<HTMLInputElement>): void {
        const file: File|undefined = e.target.files?.[0]
        if (file)
            setImageName(file.name);
    }

    function handlePostSubmit(): void {

    }

    return(
        <div className="flex justify-center w-screen h-screen bg-[rgba(229,231,235,0.8)] z-10 fixed">
            <form 
                className="flex flex-col justify-center items-center h-[30vw] w-[43vw] min-w-[700px] min-h-[500px] top-[7vw] opacity-100 bg-white fixed rounded-xl pt-8"
                ref={ref}
            >
                <div className="w-11/12">
                    <UserDetail 
                        fullname="Parthasarathi" 
                        profilePhoto={null} 
                        username="sarathi@gmail.com"
                        isTimeNeeded={false}
                    />
                </div>
                <div className="w-10/12 flex-1 mt-8 p-4 rounded-xl mb-5">
                    <textarea 
                        ref={inputRef}
                        placeholder="Type Description here.."
                        className="outline-none w-full h-full resize-none"
                        onKeyDown={(e) => {
                            if (e.key === 'Escape')
                                closeAddPost(false)
                        }}
                        required
                    />
                </div>
                <label className="block w-full pl-18">
                    <button 
                        className="border p-1.5 bg-[#e6e4e4] rounded-[8px] cursor-pointer"
                        onClick={handleImageSelecting}
                    >
                        Choose Image
                    </button>
                    <span className="ml-4">
                        {imageName}
                    </span>
                    <input
                        className="hidden"
                        ref={fileInputRef}
                        type="file"
                        onChange={handleSelectedImage}
                        required
                    />
                </label>
                <hr className="w-full mt-5"/>
                <div className="flex items-end justify-end w-full pr-6 gap-4 my-5">
                    <button 
                        className="bg-black rounded-4xl text-white py-1.5 px-6 text-xl font-medium cursor-pointer"
                        type="button"
                        onClick={() => closeAddPost(false)}
                    >
                        Cancel
                    </button>
                    <button 
                        className="bg-black rounded-4xl text-white py-1.5 px-6 text-xl font-medium"
                        type="submit" 
                        onClick={handlePostSubmit}
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    )
}