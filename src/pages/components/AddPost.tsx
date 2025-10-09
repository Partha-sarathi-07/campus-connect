export default function AddPost({closeAddPost}: {closeAddPost: React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <div className="flex justify-center w-[100vw] h-[100vw] overflow-hidden absolute bg-gray-200 opacity-50 z-100">
            <button
                onClick={() => closeAddPost(prev => !prev)}
                className="bg-amber-400 h-10 cursor-pointer"
            >
                Close
            </button>
        </div>
    )
}