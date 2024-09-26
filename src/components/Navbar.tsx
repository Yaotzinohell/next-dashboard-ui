import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import NotificationIcon from '@mui/icons-material/Notifications'
import UserIcon from '@mui/icons-material/AccountCircle'
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { Children } from 'react'
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
          <Link href="/list/updates">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
              <NotificationIcon className='h-7 w-7'/>
            </div>
          </Link>
          <UserIcon className='h-10 w-10 rounded-full color-[#00AFAA] cursor-pointer flex'/>
              {/* <div className="flex flex-col cursor-pointer ml-0">
                <span className='text-xs leading-3 font-medium cursor-pointer'>Aryaka</span>
              //   <span className="text-[10px] text-gray-500 text-right cursor-pointer">Admin</span> */}
              {/* // </div> */}
        </div>
    </div>
  )
}

export default Navbar
