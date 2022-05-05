import AddExport from "./addexport";
import AddChi from "./addprice";
import './style.css'

function Caculate() {
    const tongthu = localStorage.getItem('tongthu');
    const tongchi = localStorage.getItem('tongchi');

    const tiencon = Number(JSON.parse(tongthu)) - Number(JSON.parse(tongchi));
    console.log(tiencon)

    return (
        <div className='container'>
            <AddChi />
            <AddExport />
            <h2>Tiền còn : {tiencon}</h2>
        </div>
    )
}

export default Caculate;