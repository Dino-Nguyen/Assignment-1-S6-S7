import MonthMap from './MonthMap.js'
import ListItem from './ListItem.js';
import {useState} from "react"
const Info = (props) => {
     const {expenses} = props
     const [selectedYear, setSelectedYear] = useState(2021)
     const changeYear = (e) => {
          setSelectedYear(e.target.value)
     }
     const yearExp = expenses.filter((expense) => {
          return new Date(expense.date).getFullYear() === Number(selectedYear)
     })
    return (
      <div  className="infoCon" > 
          <div className="filterCon">
             <div>Filter by year</div>
             <div className="slcYear">
                  <select id="years" value={selectedYear} 
                  onChange={changeYear}>
                       {
                            [2021, 2022, 2023, 2024].map((year)=> {
                                 return  <option value={year}>
                                      {year}
                                 </option>
                            })
                       }
                      
                  </select>
             </div>
         </div>
         <div>
              <MonthMap expenses={yearExp}/>
         </div>
         <div>
              <ListItem expenses={yearExp}/>
         </div>
      </div>
    );
  }
  
  export default Info;