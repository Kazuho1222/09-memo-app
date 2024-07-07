import { MdAddToPhotos, MdDelete } from "react-icons/md";

type SideBarProps = {
  memos: { id: number; content: string }[];
  setCurrentMemoId: (id: number) => void;
  addNewMemo: () => void;
  deleteMemo: (id: number) => void;
}

function SideBar({ memos, setCurrentMemoId, addNewMemo, deleteMemo }: SideBarProps) {
  return (
    <>
      <div className="bg-slate-200 p-6 h-full">
        <div className="flex justify-between mx-auto items-center">
          <div>
            メモアプリ
          </div>
          <div>
            <button onClick={addNewMemo}><MdAddToPhotos /></button>
          </div>
        </div>
        <div>
          <ul className="">
            {memos.map(memo => (
              <li className="" key={memo.id} onClick={() => setCurrentMemoId(memo.id)}>
                <div className="flex justify-between rounded-md text-center bg-slate-600 hover:bg-slate-800 text-white items-center mx-auto m-4 p-2 cursor-pointer">
                  <span>{memo.content}</span>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    deleteMemo(memo.id);
                  }}
                  ><MdDelete /></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar