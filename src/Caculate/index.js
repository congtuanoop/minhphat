import AddExport from "./addexport";
import AddChi from "./addprice";
import './style.css'

function Caculate() {

    return (
        <div className='container'>
            <AddChi />
            <hr></hr>
            <AddExport />
            <hr></hr>
        </div>
    )
}

export default Caculate;