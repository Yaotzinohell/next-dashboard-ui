import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-md px-2 pd-4">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input type="text" placeholder="Search...." className="m1-2 focus:outline-none pd-4 rounded-md w-13 p-2"/>
        </div>
        {/* ICONS AND USER */}
        <div className=""></div>
    </div>
  )
}

export default Navbar
