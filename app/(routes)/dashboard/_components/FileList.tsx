import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { Archive, MoreHorizontal } from "lucide-react"
import moment from "moment"

import { FileListContext } from "@/app/_context/FileListContext"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export interface FILE {
  archive: boolean
  createdBy: string
  document: string
  fileName: string
  teamId: string
  whiteboard: string
  _id: string
  _creationTime: number
}

function FileList() {
  const [fileList, setFileList] = useState<any>()
  const router = useRouter()

  const { user }: any = useKindeBrowserClient()
  const { fileList_, setFileList_ } = useContext(FileListContext)

  useEffect(() => {
    fileList_ && setFileList(fileList_)
  }, [fileList_])

  return (
    <div className="mt-16">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-10 py-2 font-medium text-gray-500 text-[0.8rem]">
                FILE NAME
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-500 text-[0.8rem]">
                CREATED AT
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-500 text-[0.8rem]">
                EDITED
              </td>
              <td className="whitespace-nowrap px-1 py-2 font-medium text-gray-500 text-[0.8rem]">
                AUTHOR
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileList &&
              fileList.map((file: FILE, index: number) => (
                <tr
                  onClick={() => router.push(`/workspace/${file._id}`)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="whitespace-nowrap px-10 py-4 font-medium text-gray-900">
                    {file.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                    {moment(file._creationTime).format("DD/MM/YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                    {moment(file._creationTime).format("DD/MM/YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                    <Image
                      src={user?.picture}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-1 py-2 text-gray-900">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-1.5 flex items-center text-black/70 font-medium cursor-pointer">
                          <Archive className="h-3.5 w-3.5 text-black/70" />{" "}
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FileList

{
  /* odd:bg-gray-50 */
}
