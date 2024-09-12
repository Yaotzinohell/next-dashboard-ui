import NotificationIcon from '@mui/icons-material/Notifications'
import UserIcon from '@mui/icons-material/AccountCircle'
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-2 pd-3 ml-2 ring-[1.5px] ring-gray-300 px-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <input type="text" placeholder="Search...." className="m1-2 focus:outline-none pd-2 rounded-md p-1 bg-transparent outline-none"/>
        </div>
        {/* ICONS AND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <NotificationIcon className='h-7 w-7 '/>
          </div>
          <div className="flex flex-col">
            <span className='text-xs leading-3 font-medium'>Aryaka</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <UserIcon className='h-10 w-10 rounded-full color-[#00AFAA] cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar
