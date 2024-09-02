"use client"

import { useEffect, useRef, useState } from "react"

import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import List from "@editorjs/list"
// @ts-ignore
import Checklist from "@editorjs/checklist"
// @ts-ignore
import Paragraph from "@editorjs/paragraph"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      id: "123",
      type: "header",
      data: {
        level: 2
      }
    }
  ],
  version: "2.8.1"
}

function Editor({ onSaveTrigger, fileId }: any) {
  const [document, setDocument] = useState(rawDocument)
  const ref = useRef<EditorJS>()
  const updateDocument = useMutation(api.files.updateDocument)

  useEffect(() => {
    onSaveTrigger && onSaveDocument()
  }, [onSaveTrigger])

  useEffect(() => {
    initEditor()
  }, [])

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        header: {
          // @ts-ignore
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Untitled File"
          }
        },
        list: {
          // @ts-ignore
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered"
          }
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true
        },
        paragraph: {
          class: Paragraph,
          config: {
            placeholder: "New paragraph..."
          }
        }
      },
      holder: "editorjs",
      data: document
    })

    ref.current = editor
  }

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData)
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData)
          }).then(
            () => {
              toast("Document updated Successfully")
            },
            (e) => {
              toast("Server Error")
            }
          )
        })
        .catch((error) => {
          console.log("Saving failed: ", error)
        })
    }
  }

  return (
    <div>
      <div id="editorjs" className="mx-3"></div>
    </div>
  )
}

export default Editor
