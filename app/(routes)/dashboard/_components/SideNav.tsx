import { useEffect, useState } from "react"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { toast } from "sonner"
import { useConvex, useMutation } from "convex/react"

import { api } from "@/convex/_generated/api"
import SideNavTopSection, { TEAM } from "./SideNavTopSection"
import SideNavBottomSection from "./SideNavBottomSection"

function SideNav() {
  const { user }: any = useKindeBrowserClient()
  const createFile = useMutation(api.files.createFile)
  const [activeTeam, setActiveTeam] = useState<TEAM>()
  const convex = useConvex()
  const [totalFiles, setTotalFiles] = useState<Number>()

  useEffect(() => {
    activeTeam && getFiles()
  }, [activeTeam])

  const onFileCreate = (fileName: string) => {
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
          getFiles()
          toast("File created successfully!!!")
        }
      },
      (e) => {
        toast("Error while creating file")
      }
    )
  }

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id as string
    })
    setTotalFiles(result?.length)
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
        <SideNavBottomSection
          totalFiles={totalFiles}
          onFileCreate={onFileCreate}
        />
      </div>
    </div>
  )
}

export default SideNav
