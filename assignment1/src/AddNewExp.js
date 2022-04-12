import {useState} from "react"
 const AddNewExp = (props) =>  {
    const {onAddNewExp} = props
    const [formAdd, setFormAdd] = useState(false)
    const showForm = () => {
        setFormAdd(true)
    }
    const closeForm = () => {
        setFormAdd(false)
    }
    const defaultFormValue = {
        name:'',
        amount:'',
        date:'',
    }
    const [formValue, setFormValue] = useState(defaultFormValue);
    const onFormChange = (fieldName, newValue) => {
        console.log(fieldName, newValue)
        setFormValue({
            ...formValue,
            [fieldName]: newValue,
        })

    }

    const formSub = (e) => {
        e.preventDefault();
        console.log(formValue)
        onAddNewExp(formValue)
        setFormValue(defaultFormValue)
    }
        return (
        <div>
            {
                formAdd ? (<div>
                    <form onSubmit={formSub} className="addExpForm">
                       <div className="addExpFormInfo"> 
                        <div className="formInfoCon">
                            <label>Name</label>
                            <input className="inputNewExp" placeholder="name..." value={formValue.name}
                            onChange={(e) => {onFormChange('name', e.target.value)}}/>
                        </div>
                        <div  className="formInfoCon">
                            <label>Amount</label>
                            <input className="inputNewExp" type="number" placeholder="amount..." value={formValue.amount}
                            onChange={(e) => {onFormChange('amount', e.target.value)}}/>
                        </div>
                        <div  className="formInfoCon">
                            <label>Date</label>
                            <input id="date" className="inputNewExp" type="date" placeholder="date..." value={formValue.date}
                            onChange={(e) => {onFormChange('date', e.target.value)}}/>
                        </div>
                       </div> 
                        <div className="confirmBtn">
                            <button className="btnAdd" type="submit">ADD</button>
                            <button className="btnCancel" onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                    </div>) : (
  <div className="addNewExpCon">
  <button id="addNewExpBtn" onClick={showForm}>ADD NEW EXPENSE</button>
</div>)
            }
        </div>
     
    )
}
export default AddNewExp