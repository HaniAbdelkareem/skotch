import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import SideNavTopSection from "./SideNavTopSection"
import SideNavBottomSection from "./SideNavBottomSection"

function SideNav() {
  const { user } = useKindeBrowserClient()

  return (
    <div className="h-screen fixed w-72 border-r border p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection user={user} />
      </div>
      <div>
        <SideNavBottomSection />
      </div>
    </div>
  )
}

export default SideNav
