import { useState } from 'react';
import './style.css'

function AddChi() {

    const [priceNumber, setPriceNumber] = useState();
    const [priceName, setPriceName] = useState();
    const [dataPrice, setDataPrice] = useState([]);
    const tongthu = dataPrice.reduce((pre, curr) => pre = pre + Number(curr.priceNumber), 0)

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
            <h2>TIỀN THU KHÁCH</h2>
            <input placeholder='Nhập tên khách hàng' onChange={(e) => setPriceName(e.target.value)} />
            <input placeholder='Nhập số tiền thu khách hàng' onChange={(e) => setPriceNumber(e.target.value)} />

            <button onClick={handleNumOne}>Nhập thu</button>

            <ul>
                {dataPrice.map((data, index) => (
                    <li key={index}>
                        {data.priceName} : {data.priceNumber}
                    </li>
                ))}
            </ul>
            <h3>TỔNG THU</h3> {tongthu}
            {localStorage.setItem('tongthu', tongthu)}

        </div>

    )
}

export default AddChi;