import Logo from "@/app/_components/Logo"
import { Button } from "@/components/ui/button"
import { Link, Save } from "lucide-react"

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Logo />
        <h2>File Name</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button className="gap-2" onClick={() => onSave()}>
          Save <Save className="h-3.5 w-3.5" />
        </Button>
        <Button className="gap-2">
          Share <Link className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader
