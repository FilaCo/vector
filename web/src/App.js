import React, { useEffect, useState } from 'react'

const App = () => {
  const [stream, setStream] = useState(undefined)

  useEffect(() => {
    const getUserMedia = async () => {
      setStream(
        await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      )
    }

    getUserMedia()
  }, [])

  return <div>Hello, world!</div>
}

export default App
