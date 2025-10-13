import options from '../../src/assets/more.png'
import type { UserDetailType } from '../types/UserDetailType'
import CustomProfilePhoto from './CustomProfilePhoto';

export default function UserDetail(props: UserDetailType) {
    
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
    return (
        <div className="flex items-center w-full">
            {
                props.profilePhoto ? 
                    <img 
                        className='rounded-4xl w-[70px] h-[70px] object-cover'
                        src={`data:${getImageType(props.profilePhoto)};base64,${props.profilePhoto}`} 
                        alt="profile photo"
                    />
                    :
                    <CustomProfilePhoto fullname={props.fullname} />
            }
            <div className='flex flex-col justify-center ml-[20px] gap-1 w-5/6'>
                <div>
                    <span className='font-bold mr-2'>
                        {props.fullname}
                    </span>
                    {
                        props.isTimeNeeded &&
                        <span className='text-[#666]'>&middot; 5m</span>
                    }
                </div>
                <span className='text-[#666]'>{props.username}</span>
            </div>
            <div className='cursor-pointer'>
                <img 
                    className='w-[30px] right-0'
                    src={options} 
                    alt="options image" />
            </div>
        </div>
    )
}