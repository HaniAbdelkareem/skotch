import { Button } from "@/components/ui/button"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Search, Send } from "lucide-react"
import Image from "next/image"

function Header() {
  const { user }: any = useKindeBrowserClient()

  return (
    <div className="flex justify-end w-full gap-3 items-center p-8">
      <div className="flex gap-2 items-center border rounded-md py-[0.4rem] px-3">
        <Search className="h-4 w-4 text-gray-400" />
        <input type="text" placeholder="Search" className="text-[0.9rem]" />
      </div>
      <div>
        <Image
          src={user?.picture}
          alt="user"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <Button className="flex gap-2 items-center bg-black/85 h-[2.3rem]">
        <Send className="h-[0.9rem] w-[0.9rem]" />
        <span>Invite</span>
      </Button>
    </div>
  )
}

export default Header
