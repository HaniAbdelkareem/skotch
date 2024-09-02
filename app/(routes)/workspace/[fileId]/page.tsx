"use client"

import { useState } from "react"
import Editor from "../_components/Editor"
import WorkspaceHeader from "../_components/WorkspaceHeader"

function Workspace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false)

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen">
          <Editor onSaveTrigger={triggerSave} fileId={params.fileId} />
        </div>
        {/* Canvas */}
        <div className="bg-red-500 h-screen">Canvas</div>
      </div>
    </div>
  )
}

export default Workspace
