import React, { useEffect, useState } from 'react'

const Task10 = () => {

  const [content, setContent] = useState(
    localStorage.getItem("draft") || ""
  )

  useEffect(() => {
    localStorage.setItem("draft", content);
  },[content])

  useEffect(() => {
    const savedDraft = localStorage.getItem("draft");
    if(savedDraft) {
      setContent(savedDraft);
    }
  },[])
  

  return (
    <div>
      <textarea value={content} cols={30} rows={10} placeholder='Write your notes...'
      onChange={(e) => {
        setContent(e.target.value)
      }}/>
      <p>Characters: {content.replace(/\s/g,"").length}</p>
    </div>
  )
}

export default Task10
