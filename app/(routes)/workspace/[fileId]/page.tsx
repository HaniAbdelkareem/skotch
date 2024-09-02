import Editor from "../_components/Editor"
import WorkspaceHeader from "../_components/WorkspaceHeader"

function Workspace() {
  return (
    <div>
      <WorkspaceHeader />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen">
          <Editor />
        </div>
        {/* Canvas */}
        <div className="bg-red-500 h-screen">Canvas</div>
      </div>
    </div>
  )
}

export default Workspace
