import { useState } from 'react';
import SideBar from './components/SideBar';
import Tiptap from './components/Tiptap';

type Memo = {
  id: number;
  content: string;
}

export default function Home() {
  const [memos, setMemos] = useState<Memo[]>([{ id: 0, content: 'new note' }]);
  const [currentMemoId, setCurrentMemoId] = useState<number>(memos[0].id);

  const currentMemo = memos.find(memo => memo.id === currentMemoId);

  const updateMemoContent = (content: string) => {
    const updatedMemos = memos.map(memo =>
      memo.id === currentMemoId ? { ...memo, content } : memo
    );
    setMemos(updatedMemos);
  }

  const addNewMemo = () => {
    const newMemo = { id: memos.length + 1, content: 'new note' };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
    setCurrentMemoId(newMemo.id);
  }

  const deleteMemo = (id: number) => {
    const updatedMemos = memos.filter(memo => memo.id !== id);

    if (currentMemoId === id) {
      const currentMemoIndex = memos.findIndex(memo => memo.id === id);
      if (currentMemoIndex > 0) {
        setCurrentMemoId(memos[currentMemoIndex - 1].id);
      } else if (updatedMemos.length > 0) {
        setCurrentMemoId(updatedMemos[0].id);
      } else {
        const newMemo = { id: 0, content: 'new note' };
        setMemos([newMemo]);
        setCurrentMemoId(newMemo.id);
        return;
      }
    }
    setMemos(updatedMemos);
  }

  return (
    <div className='flex items-center justify-center container mx-auto h-[100vh]'>
      <div className='w-1/4 h-3/4'>
        <SideBar memos={memos} setCurrentMemoId={setCurrentMemoId} addNewMemo={addNewMemo} deleteMemo={deleteMemo} />
      </div>
      <div className='w-3/4 h-3/4'>
        {currentMemo && (
          <Tiptap
            sentence={currentMemo.content}
            setSentence={updateMemoContent}
          />
        )}
      </div>
    </div>
  );
}
