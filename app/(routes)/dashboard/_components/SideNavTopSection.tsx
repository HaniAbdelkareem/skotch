import Logo from "@/app/_components/Logo"
import {
  BriefcaseBusiness,
  ChevronDown,
  LayoutGrid,
  LogOut,
  Settings,
  Users
} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { api } from "@/convex/_generated/api"
import { useConvex } from "convex/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export interface TEAM {
  createdBy: String
  teamName: String
  _id: String
}

function SideNavTopSection({ user, setActiveTeamInfo }: any) {
  const menu = [
    {
      id: 1,
      name: "Create team",
      path: "/teams/create",
      icon: Users
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings
    }
  ]

  const router = useRouter()
  const convex = useConvex()
  const [activeTeam, setActiveTeam] = useState<TEAM>()
  const [teamList, setTeamList] = useState<TEAM[]>()

  useEffect(() => {
    user && getTeamList()
  }, [user])

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam)
  }, [activeTeam])

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, { email: user?.email })
    setTeamList(result)
    setActiveTeam(result[0])
  }

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path)
    }
  }

  return (
    <div>
      <Popover>
        <Logo />
        <PopoverTrigger className="flex flex-col gap-5 w-full mt-6">
          <h2 className="flex justify-between items-center border backdrop-blur-sm shadow-xl shadow-slate-100 border-gray-200 hover:bg-gray-100/30 transition cursor-pointer rounded-md p-3 font-semibold text-[0.95rem] tracking-tight text-black/80">
            {activeTeam?.teamName}
            <ChevronDown className="text-black/80" />
          </h2>
        </PopoverTrigger>
        <PopoverContent className="ml-6 p-4">
          {/* Team Section */}
          <div className="flex flex-col">
            {teamList?.map((team, index) => (
              <h2
                key={index}
                className={`text-[0.9rem] flex gap-2 items-center font-medium text-black/80 transition p-2.5 rounded-sm cursor-pointer ${activeTeam?._id === team._id && "bg-gray-100"}`}
                // ${activeTeam?._id === team._id && "bg-black/85 text-white"}
                onClick={() => setActiveTeam(team)}
              >
                <BriefcaseBusiness className="h-5 w-5 text-black/80" />
                {team.teamName}
                {activeTeam?._id === team._id && (
                  <span className="text-[0.8rem] text-black/80 ml-auto">
                    Current Team
                  </span>
                )}
              </h2>
            ))}
          </div>
          <Separator className="mt-3" />
          {/* Option Section */}
          <div className="mt-4">
            {menu.map((item, index) => (
              <h2
                key={index}
                className="flex gap-3 items-center p-2 hover:bg-gray-100 text-black/80 rounded-sm text-[0.9rem] cursor-pointer"
                onClick={() => onMenuClick(item)}
              >
                <item.icon className="h-5 w-5 text-black/80" />
                {item.name}
              </h2>
            ))}
            <LogoutLink className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded-sm text-[0.9rem] cursor-pointer text-black/80">
              <LogOut className="h-5 w-5 text-black/80" />
              Logout
            </LogoutLink>
          </div>
          <Separator className="mt-3" />
          {/* User Info Section */}
          {user && (
            <div className="mt-3 flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={user?.picture}
                alt="user"
                width={35}
                height={35}
              />
              <div>
                <h2 className="text-black/90 text-[0.9rem]">
                  {user?.given_name} {user?.family_name}
                </h2>
                <h2 className="text-black/80 text-[0.8rem]">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* All File Button */}
      <Button className="w-full gap-1 bg-black/85 hover:bg-black/85 text-white text-[0.95rem] mt-8 tracking-[-0.2px] border border-black/15 flex justify-start">
        <LayoutGrid className="h-4 w-4" />
        All Files
      </Button>
    </div>
  )
}

export default SideNavTopSection
