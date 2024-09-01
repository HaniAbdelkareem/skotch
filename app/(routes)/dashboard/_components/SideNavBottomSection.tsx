import { Button } from "@/components/ui/button"
import { Archive, Flag, Github } from "lucide-react"

function SideNavBottomSection() {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      path: "",
      icon: Flag
    },
    {
      id: 2,
      name: "Github",
      path: "",
      icon: Github
    },
    {
      id: 3,
      name: "Archive",
      path: "",
      icon: Archive
    }
  ]

  return (
    <div className="flex flex-col">
      {menuList.map((menu, index) => (
        <h2 className="flex gap-2 p-2 text-[0.9rem] hover:bg-gray-100 text-black/80 rounded-lg items-center cursor-pointer">
          <menu.icon className="h-4 w-4 text-black/80" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button */}
      <Button className="w-full bg-black/90 mt-3">New File</Button>

      {/* Progress Bar */}
      <div className="h-3 w-full bg-gray-200 rounded-full mt-5">
        <div className="h-3 w-[40%] bg-blue-500 rounded-full"></div>
      </div>
      <h2 className="text-black/90 mt-4 text-[0.9rem] tracking-[-0.2px]">
        <strong>1</strong> out of <strong>5</strong> files used.
      </h2>
      <p className="text-black/80 text-[0.8rem] mt-1 tracking-[-0.2px]">
        <strong className="underline font-medium">Upgrade</strong> your plan for
        unlimmited access.
      </p>
    </div>
  )
}

export default SideNavBottomSection
