"use client"

import Logo from "@/app/_components/Logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useMutation } from "convex/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

function CreateTeam() {
  const [teamName, setTeamName] = useState("")

  const createTeam = useMutation(api.teams.createTeam)
  const { user }: any = useKindeBrowserClient()

  const router = useRouter()

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email
    }).then((resp) => {
      if (resp) {
        router.push("/dashboard")
        toast("Team created successfully!!!")
      }
    })
  }

  return (
    <div className="p-16">
      <Logo />
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-black/90 font-bold text-[2.7rem] tracking-[-1px]">
          What should we call your team?
        </h2>
        <p className="mt-1 text-lg font-medium tracking-tight text-black/60">
          You can always change this later from settings
        </p>
        <div className="mt-14 w-[30%]">
          <label className="text-[0.95rem] text-black/80 tracking-[-0.3px] font-medium">
            Team name
          </label>
          <Input
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Name example"
            className="mt-2 py-6"
          />
        </div>
        <Button
          disabled={!(teamName && teamName?.length > 0)}
          className="mt-4 w-[30%] py-6"
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  )
}

export default CreateTeam
