import { useEffect, useRef, useState } from "react";

function Add({ handleAdd }) {
    const [nameAdd, setNameAdd] = useState('')
    const [moneyAdd, setMoneyAdd] = useState(0)
    const addRef = useRef();
    const moneyRef = useRef();

    function handleAddForm() {
        addRef.current.focus()
        addRef.current.value = ''
        moneyRef.current.value = ''
        return handleAdd({
            nameAdd,
            moneyAdd
        })
    }

    return (
        <div>
            <h1>TIỀN THU</h1>
            <input
                ref={addRef}
                onChange={(e) => setNameAdd(e.target.value)}
                placeholder="Enter Name..." />
            <br />
            <input
                type='number'
                ref={moneyRef}
                onChange={(e) => setMoneyAdd(e.target.value)}
                placeholder="Enter money..." />
            <br />
            <button
                onClick={handleAddForm}
            >
                Nhập thu
            </button>
        </div>
    )
}

export default Add;