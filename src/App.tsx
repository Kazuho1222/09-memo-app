import { useState } from 'react';
import SideBar from './components/SideBar';
import Tiptap from './components/Tiptap';

type Memo = {
  id: number;
  content: string;
}


export default function Home() {
  const [memos, setMemos] = useState<Memo[]>([{ id: 1, content: '初期値' }])
  const [currentMemoId, setCurrentMemoId] = useState<number>(memos[0].id)

  const currentMemo = memos.find(memo => memo.id === currentMemoId)

  const updateMemoContent = (content: string) => {
    const updatedMemos = memos.map(memo =>
      memo.id === currentMemoId ? { ...memo, content } : memo
    )
    setMemos(updatedMemos)
  }

  const addNewMemo = () => {
    const newMemo = { id: memos.length + 1, content: '新しいメモ' }
    const updatedMemos = [...memos, newMemo]
    setMemos(updatedMemos)
    setCurrentMemoId(newMemo.id)
  }

  return (
    <>
      <div>
        <div className='flex-none absolute'>
          <SideBar memos={memos} setCurrentMemoId={setCurrentMemoId} addNewMemo={addNewMemo} />

        </div>

        {currentMemo && (
          <Tiptap
            sentence={currentMemo.content}
            setSentence={updateMemoContent}
          />
        )}

      </div>
    </>
  )
}