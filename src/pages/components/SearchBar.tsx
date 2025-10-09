import searchIcon from '../../assets/search.png'

export default function SearchBar() {
    return(
        <div className="fixed flex items-center justify-center h-[6vw] min-h-[70px] border bg-[#F5F5F5] w-[42.5vw]">
            <div className="w-fit">
                <form className='flex items-center p-[10px] rounded-4xl h-[60px] pl-4 outline-none border-1 border-[#656565]'>
                    <img 
                        className='max-w-[20px] max-h-[20px] mr-2'
                        src={searchIcon} 
                        alt="search icon" />
                    <input
                        className='border-none focus:outline-none w-[22vw] text-xl'
                        type="text" 
                        placeholder='search events'
                        />
                </form>
            </div>
        </div>
    )
}