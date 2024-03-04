import { useEffect, useRef, useState } from "react"

function formatTimer(time) {
    let minute = Math.trunc(time / 60)

    let second = Math.trunc(time - minute * 60)

    return minute + ":" + second
}

const CountDown = ({ seconds }) => {

    const [timer, setTimer] = useState(seconds)

    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current)
            setTimer("Finished")
        }
    }, [timer])

    return (
        <div>{formatTimer(timer)}</div>
    )
}

export default CountDown