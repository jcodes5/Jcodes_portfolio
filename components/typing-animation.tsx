"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        return
      }
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    if (displayText === currentText) {
      setIsPaused(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="inline-flex items-center">
      <span>{displayText}</span>
      <span className="ml-1 w-[3px] h-[1em] bg-primary animate-pulse" />
    </span>
  )
}
