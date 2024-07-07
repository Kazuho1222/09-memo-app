import { Editor } from "@tiptap/react"
import { MdCode, MdFormatBold, MdFormatItalic, MdFormatStrikethrough, MdHorizontalRule, MdRedo, MdUndo } from "react-icons/md"


const ToolMenu = ({ editor }: { editor: Editor }) => {
  // if (!editor) {
  //   return null
  // }

  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-600 p-4 text-2xl">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={!editor.isActive('bold') ? 'opacity-20' : ''}
      >
        <MdFormatBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={!editor.isActive('strike') ? 'opacity-20' : ''}
      >
        <MdFormatStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <MdFormatItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <MdCode />
      </button >
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}>
        paragraph
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <MdHorizontalRule />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
      >
        <MdUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
      >
        <MdRedo />
      </button>
    </div >
  )
}

export default ToolMenu