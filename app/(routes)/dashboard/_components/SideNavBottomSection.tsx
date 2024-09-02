import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Archive, File, Flag, Github } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const [fileInput, setFileInput] = useState("")

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
        <h2
          key={index}
          className="flex gap-2 p-2 text-[0.9rem] hover:bg-gray-100 text-black/80 rounded-lg items-center cursor-pointer"
        >
          <menu.icon className="h-4 w-4 text-black/80" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button */}
      <Dialog>
        <DialogTrigger className="" asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-500 mt-3 text-[0.9rem] tracking-[-0.2px] gap-1.5">
            <File className="w-[1.1rem] h-[1.1rem]" />
            New File
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input
                onChange={(e) => setFileInput(e.target.value)}
                placeholder="Enter File Name"
                className="mt-3"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                disabled={!(fileInput && fileInput.length > 0)}
                onClick={() => onFileCreate(fileInput)}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Progress Bar */}
      <div className="h-3 w-full bg-gray-300 rounded-full mt-5">
        <div
          className={`h-3 bg-blue-600 rounded-full`}
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>
      <h2 className="text-black/90 mt-5 text-[0.85rem] tracking-[-0.2px]">
        <strong>{totalFiles}</strong> out of <strong>5</strong> files used.
      </h2>
      <p className="text-black/80 text-[0.75rem] mt-1 tracking-[-0.2px]">
        <strong className="underline font-medium">Upgrade</strong> your plan for
        unlimmited access.
      </p>
    </div>
  )
}

export default SideNavBottomSection
