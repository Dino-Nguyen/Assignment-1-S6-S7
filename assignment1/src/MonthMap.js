import ProgressBar from "./ProgressBar"
const MonthMap = (props) => {
  const {expenses} = props
  const calTotalExpAmo = (expensesToCal) => {
    return expensesToCal.reduce((total, expense) => {
      return total + Number(expense.amount)
    },0)
  }
  const totalExpAmount = calTotalExpAmo(expenses)
  const getMonthPer = (month) => {
    const monthExp = expenses.filter((expense) => {
      const expenseMon = new Date(expense.date).getMonth() +1;
      return expenseMon === month
    })
    console.log("getMonPer", monthExp)
    return monthExp.length > 0 ? (calTotalExpAmo(monthExp)/totalExpAmount) * 100 : 0;
  }
  const monthList = ['Jan', 'Feb' , 'Mar', "Apr", 'May' , 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div className = "monthMapCon">
        {
          monthList.map((month, index)=> {
            return <span key={index}><ProgressBar  label={month} percentage={getMonthPer(index +1)}/> </span>
          })
        }
       
       
      </div>
    );
  }
  
  export default MonthMap;