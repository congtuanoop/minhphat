import { useRef, useState } from "react";

function Ex({ handleEx }) {
    const [nameEx, setNameEx] = useState('')
    const [moneyEx, setMoneyEx] = useState(0)
    const nameRef = useRef();
    const numberRef = useRef();

    function handleExForm() {
        nameRef.current.focus();
        nameRef.current.value = '';
        numberRef.current.value = ''
        return handleEx({
            nameEx,
            moneyEx
        })
    }

    return (
        <div>
            <input
                ref={nameRef}
                onChange={(e) => setNameEx(e.target.value)}
                placeholder="Typing name..." />
            <br />
            <input
                type='number'
                ref={numberRef}
                onChange={(e) => setMoneyEx(e.target.value)}
                placeholder="Typing money..." />
            <br />
            <button
                onClick={handleExForm}
            >
                Nhập chi
            </button>
        </div>
    )
}

export default Ex;