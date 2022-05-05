import { useState } from "react";

function AddExport() {

    const [priceNumber, setPriceNumber] = useState();
    const [priceName, setPriceName] = useState();
    const [dataPrice, setDataPrice] = useState([]);
    const tongchi = dataPrice.reduce((pre, curr) => pre = pre + Number(curr.priceNumber), 0);

    const handleNumOne = () => {
        const newNumber = {
            priceNumber: priceNumber,
            priceName: priceName
        }

        setDataPrice(prev => {
            return [
                ...prev,
                newNumber
            ]
        })
    }

    return (
        <div className="add-price">
            <h2>TIỀN CHI</h2>
            <input onChange={(e) => setPriceName(e.target.value)} />
            <input onChange={(e) => setPriceNumber(e.target.value)} />

            <button onClick={handleNumOne}>Nhập thu</button>
            <ul>
                {dataPrice.map((data, index) => (
                    <li key={index}>
                        {data.priceName} : {data.priceNumber}
                    </li>
                ))}
            </ul>
            <h3>TỔNG CHI</h3> {tongchi}
            {localStorage.setItem('tongchi', tongchi)}

        </div>

    )

}

export default AddExport;