import Image from "next/image";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import ProfileIcon from '@mui/icons-material/AccountCircle'
import CustomerIcon from '@mui/icons-material/Person'
import NewincidentIcon from '@mui/icons-material/Add'
import EditincidentIcon from '@mui/icons-material/Edit'
import UpdatesIcon from '@mui/icons-material/SystemUpdateAlt'
import LogoutIcon from '@mui/icons-material/Logout'
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <HomeIcon />,
        label: "Dashboard",
        href: "/",
        visible: ["admin"],
      },
      {
        icon: <NewincidentIcon />,
        label: "New Incident",
        href: "/list/teachers",
        visible: ["admin"],
      },
      {
        icon: <EditincidentIcon />,
        label: "Edit Incident",
        href: "/list/students",
        visible: ["admin"],
      },
      {
        icon: <CustomerIcon />,
        label: "Customers",
        href: "/list/parents",
        visible: ["admin"],
      },
      {
        icon: <UpdatesIcon />,
        label: "Updates",
        href: "/list/subjects",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <SettingsIcon />,
        label: "Settings",
        href: "/profile",
        visible: ["admin"],
      },
      {
        icon: <ProfileIcon />,
        label: "Profile",
        href: "/settings",
        visible: ["admin"],
      },
      {
        icon: <LogoutIcon />,
        label: "Logout",
        href: "/logout",
        visible: ["admin"],
      }, 
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i)=>(
        <div className="flex flex-col gap-2 " key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4 mt-4 ml-4">{i.title}</span>
          {i.items.map((item)=>(
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 hover:bg-white rounded-lg p-3">
              {/* <Image src={item.icon} alt="" width={20} height={20}/> */}
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
