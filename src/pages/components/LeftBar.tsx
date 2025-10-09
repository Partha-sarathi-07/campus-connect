import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
// import homeFilled from '../../assets/homeFilled.png';
import myPosts from '../../assets/post.png'
// import myPostsFilled from '../../assets/postFilled.png';
import saved from '../../assets/save.png';
// import savedFilled from '../../assets/saveFilled.png'
import profile from '../../assets/user.png'
// import profileFilled from '../../assets/userFilled.png'
import logout from '../../assets/logout.png'
// import logoutFilled from '../../assets/logoutFilled.png'
// import logoutFilled from '../../assets/logoutFilled.png'
import type { NavItemType } from '../../types/NavItemType';


const navItems:NavItemType[] = [
    {label: "Home", icon: home, path:"/"},
    {label: "My Posts", icon: myPosts, path:"/myPosts"},
    {label: "Saved", icon: saved, path:"/saved"},
    {label: "Profile", icon: profile, path:"/me"},
    {label: "logout", icon: logout, path:"/logout"},
]


export default function LeftBar({handlePostClicked}: {handlePostClicked: React.Dispatch<React.SetStateAction<boolean>>}) {


    return(
        <div className="flex flex-col left-0 top-0 pt-[10px] pb-[4vw] items-center w-[22.5vw] h-screen min-w-[200px] fixed">

            <div className='flex justify-center mb-[50px]'>
                <img
                    className="w-1/5 min-w-[70px]"
                    src={logo} 
                    alt="campus connect logo" 
                />
            </div>

            <div className='flex flex-col gap-[1.25vw] list-none'>
                {
                    navItems.map(item => 
                        <li key={item.label} className="flex items-center gap-2 hover:bg-[#eee] active:bg-[#ddd] py-[7px] px-[10px] rounded-4xl cursor-pointer">
                            <img
                                className="w-[25px] h-[25px]"
                                src={item.icon} 
                                alt={item.icon} />
                            <span className="text-[24px] font-bold text-[#666666]">{item.label}</span>
                        </li>
                    )
                }
            </div>

            <div className='flex h-full items-end'>
                <button onClick={() => handlePostClicked(prev => !prev)} className='text-white px-[6vw] py-[0.6vw] max-h-[50px] bg-black rounded-4xl font-bold text-xl relative bottom-0 cursor-pointer hover:bg-[#222] active:bg-[#444]'>
                    Post
                </button>
            </div>

        </div>
    )
}