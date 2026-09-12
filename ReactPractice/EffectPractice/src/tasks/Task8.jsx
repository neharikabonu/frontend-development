import React, { useEffect, useState } from 'react'

const Task8 = () => {

  const [status, setStatus] = useState(navigator.onLine)

  useEffect (() => {
    const webStatus = () => {
      setStatus(window.navigator.onLine);
    }

    window.addEventListener("online", webStatus);
    window.addEventListener("offline", webStatus);

    return () => {
      window.removeEventListener("online", webStatus);
      window.removeEventListener("offline", webStatus);
    }
  },[])

  return (
    <div>
      <p>Status: {status ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  )
}

export default Task8
