import { useState } from "react";

function Add({ handleAdd }) {
    const [nameAdd, setNameAdd] = useState('')
    const [moneyAdd, setMoneyAdd] = useState(0)

    function handleAddForm() {
        return handleAdd({
            nameAdd,
            moneyAdd
        })
    }

    return (
        <div>
            <h1>TIỀN THU</h1>
            <input
                onChange={(e) => setNameAdd(e.target.value)}
                placeholder="Enter Name..." />
            <br />
            <input
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