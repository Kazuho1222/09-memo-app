'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolMenu from './ToolMenu'

type Props = {
  sentence: string
  setSentence: (sentence: string) => void
}

const Tiptap = ({ sentence, setSentence }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: sentence,
    editorProps: {
      attributes: {
        class: 'prose prose-base m-5 focus:outline-none',
      },
    },
  })

  if (editor) {
    editor.on('update', () => {
      setSentence(editor.getText())
    })
  }

  if (!editor) {
    return null
  }

  return (
    <div className='w-2/3 mt-10 mx-auto border-gray-500 border-2'>
      <ToolMenu editor={editor} />
      <div className='p-3 overflow-y-scroll h-[70vh] overflow-hidden mt-3'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
