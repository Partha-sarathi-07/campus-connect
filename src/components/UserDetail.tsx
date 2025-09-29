import dummyUser from '../../public/user1.jpg'
import options from '../../src/assets/more.png'
export default function UserDetail() {
    return (
        <div className="flex items-center">
            <img 
                className='rounded-4xl w-[70px] h-[70px] object-cover'
                src={dummyUser} 
                alt="user" />
            <div className='flex flex-col justify-center ml-[20px] gap-1 w-5/6'>
                <div>
                    <span className='font-bold mr-2'>
                        Peter Parker
                    </span>
                    <span className='text-[#666]'>&middot; 5m</span>
                </div>
                <span className='text-[#666]'>@peterparker.cs21@bitsathy.ac.in</span>
            </div>
            <div>
                <img 
                    className='w-[30px] right-0'
                    src={options} 
                    alt="options image" />
            </div>
        </div>
    )
}