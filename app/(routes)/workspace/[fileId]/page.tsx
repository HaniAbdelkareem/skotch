"use client"

import { useEffect, useState } from "react"
import { useConvex } from "convex/react"

import Editor from "../_components/Editor"
import WorkspaceHeader from "../_components/WorkspaceHeader"
import { api } from "@/convex/_generated/api"
import { FILE } from "../../dashboard/_components/FileList"

function Workspace({ params }: any) {
  const [fileData, setFileData] = useState<FILE | any>()
  const [triggerSave, setTriggerSave] = useState(false)

  const convex = useConvex()

  useEffect(() => {
    params.fileId && getFileData()
  }, [])

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId
    })
    setFileData(result)
  }

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
        {/* Canvas */}
        <div className="bg-red-500 h-screen">Canvas</div>
      </div>
    </div>
  )
}

export default Workspace
