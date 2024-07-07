import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'
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

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(sentence);
      const updateHandler = () => {
        setSentence(editor.getText());
      }
      editor.on('update', updateHandler);

      return () => {
        editor.off('update', updateHandler);
      }
    }
  }, [editor, sentence, setSentence]);

  if (!editor) {
    return null
  }

  return (
    <div className='border-gray-500 border-2 h-full'>
      <ToolMenu editor={editor} />
      <div className='overflow-y-scroll overflow-hidden mt-3 h-3/4'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
