import AddNewExp from './AddNewExp';
import './App.css';
import Info from './Info';
import { useState } from "react"
function App() {
  const [expenses, setExpenses] = useState([
    {
      name:'Some Books',
      amount: 50,
      date: '2022-10-01',
    },
    {
      name:'Some Toys',
      amount: 350,
      date: '2021-07-19',
    },
    {
      name:'Trip',
      amount: 190,
      date: '2021-1-21',
    },
    {
      name:'Learning',
      amount: 70,
      date: '2022-6-8',
    },
    {
      name:'Learning',
      amount: 90,
      date: '2023-4-15',
    },
    {
      name:'Learning',
      amount: 90,
      date: '2023-6-20',
    },
    {
      name:'Car',
      amount: 1500,
      date: '2024-12-20',
    },
    {
      name:'Birthday',
      amount: 350,
      date: '2024-04-20',
    },
  ])
  const handleAddNewExp = (newExp) => {
       setExpenses([
         ...expenses,
         newExp
       ])
  }
  return (
    <div className="App">
      <AddNewExp onAddNewExp={handleAddNewExp}/>
      <Info expenses={expenses}/>
    </div>
  );
}

export default App;
