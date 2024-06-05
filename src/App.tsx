import Tiptap from './components/Tiptap'

import { useState } from 'react'


export default function Home() {

  const [sentence, setSentence] = useState<string>('初期値')

  return (
    <>

      {/* <p>state = {sentence}</p> */}

      <Tiptap sentence={sentence} setSentence={setSentence} />

    </>
  )
}
