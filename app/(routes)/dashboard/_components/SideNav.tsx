import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import SideNavTopSection, { TEAM } from "./SideNavTopSection"
import SideNavBottomSection from "./SideNavBottomSection"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useState } from "react"
import { toast } from "sonner"

function SideNav() {
  const { user }: any = useKindeBrowserClient()
  const createFile = useMutation(api.files.createFile)
  const [activeTeam, setActiveTeam] = useState<TEAM>()
  const onFileCreate = (fileName: string) => {
    console.log(fileName)
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id as string,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: ""
    }).then(
      (resp) => {
        if (resp) {
          toast("File created successfully!!!")
        }
      },
      (e) => {
        toast("Error while creating file")
      }
    )
  }

  return (
    <div className="h-screen fixed w-72 border-r border p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SideNavBottomSection onFileCreate={onFileCreate} />
      </div>
    </div>
  )
}

export default SideNav
