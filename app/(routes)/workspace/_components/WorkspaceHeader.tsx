import Logo from "@/app/_components/Logo"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

function WorkspaceHeader() {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Logo />
        <h2>File Name</h2>
      </div>
      <Button className="gap-2">
        Share <Link className="h-3.5 w-3.5" />
      </Button>
    </div>
  )
}

export default WorkspaceHeader
