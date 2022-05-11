import { useState } from "react";

function Ex({ handleEx }) {
    const [nameEx, setNameEx] = useState('')
    const [moneyEx, setMoneyEx] = useState(0)

    function handleExForm() {
        return handleEx({
            nameEx,
            moneyEx
        })
    }

    return (
        <div>
            <h1>TIỀN CHI</h1>
            <input
                onChange={(e) => setNameEx(e.target.value)}
                placeholder="Enter Name..." />
            <br />
            <input
                onChange={(e) => setMoneyEx(e.target.value)}
                placeholder="Enter money..." />
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