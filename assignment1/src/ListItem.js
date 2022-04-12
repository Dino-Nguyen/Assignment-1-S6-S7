const monthList = ['Jan', 'Feb' , 'Mar', "Apr", 'May' , 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const ListItem = (props) => {
  const {expenses} = props
  return (
    <div>{ expenses.map((expense) => {
      return <div className="itemsCard">
        <div className="dayBox">
          <span className="dayItem">{new Date(expense.date).getDate()}</span>
          <span>{monthList[new Date(expense.date).getMonth()]}</span>
          <span>{new Date(expense.date).getYear()+1900}</span>
       </div >
       <div className="infoItem">
          <span className="itemName">{expense.name}</span>
          <span className="itemAmount">{expense.amount}</span>
       </div>
     </div>
       })}
    </div>
  )
}
export default ListItem