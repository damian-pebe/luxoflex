import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return displayText
}

