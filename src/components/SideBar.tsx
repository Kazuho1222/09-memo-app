type SideBarProps = {
  memos: { id: number; content: string }[];
  setCurrentMemoId: (id: number) => void;
  addNewMemo: () => void;
}

function SideBar({ memos, setCurrentMemoId, addNewMemo }: SideBarProps) {
  return (
    <>
      <div className="flex-wrap bg-slate-100 p-6 h-[80vh]">
        <div>
          メモアプリ
        </div>
        <div>
          <button onClick={addNewMemo}>新しいメモを追加</button>
        </div>
        <div>
          <ul>
            {memos.map(memo => (
              <li key={memo.id} onClick={() => setCurrentMemoId(memo.id)}>
                メモ {memo.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar