import Comments from "./components/Comments";
import LeftBar from "./components/LeftBar";
import Posts from "./components/Posts";
import SearchBar from "./components/SearchBar";

export default function HomePage() {
    return(
        <>
            <LeftBar />
            <div className="flex flex-col w-[42.5vw] ml-[22.5vw] border-r-1">
                <SearchBar />
                <Posts />
            </div>
            <Comments />
        </>
    )
}