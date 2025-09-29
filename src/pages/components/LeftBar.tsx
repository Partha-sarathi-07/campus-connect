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

const navItem = "flex items-center gap-2 hover:bg-[#eee] py-[7px] px-[10px] rounded-4xl cursor-pointer"
const navItemImg = "w-[25px] h-[25px]"
const navItemText = "text-[24px] font-bold text-[#666666]"

const navItems:NavItemType[] = [
    {label: "Home", icon: home, path:"/"},
    {label: "My Posts", icon: myPosts, path:"/myPosts"},
    {label: "Saved", icon: saved, path:"/saved"},
    {label: "Profile", icon: profile, path:"/me"},
    {label: "logout", icon: logout, path:"/logout"},
]


export default function LeftBar() {
    return(
        <div className="flex flex-col pt-[10px] items-center w-[22.5vw] h-screen border-1 min-w-[200px] fixed">

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
                        <li key={item.label} className={navItem}>
                            <img
                                className={navItemImg}
                                src={item.icon} 
                                alt={item.icon} />
                            <span className={navItemText}>{item.label}</span>
                        </li>
                    )
                }
            </div>

            <button className='text-white px-[6vw] py-[0.6vw] bg-black rounded-4xl font-bold text-xl mt-[25vw]'>
                Post
            </button>

        </div>
    )
}