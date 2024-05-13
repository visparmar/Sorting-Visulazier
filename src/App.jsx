import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [array, setArray] = useState([]);

  const generateArray = (length) => {
    let newArray = [];
    for (let i = 0; i <length; i++) {
      newArray.push({
        value:Math.random(),
        color:'lightblue'
      })

    }
    setArray(newArray);
  };

  function bubbleSort(arr) {
    const n = arr.length;
    const newArr = [...arr]; // Create a new array to avoid modifying the state directly

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          setTimeout(()=>{
            newArr[j].color="blue";
            
            if (newArr[j].value > newArr[j + 1].value) {
              const temp = newArr[j];
              newArr[j] = newArr[j + 1];
              newArr[j + 1] = temp;
              setArray([...newArr]);
            }
            newArr[j].color="lightblue";
          },(i * n + j)*500)
      }
    }

  }



  return (
      
   
    <>
    <div className='w-full  justify-center bg-slate-600 '>
      <div className='flex mx-20'>
      <button className='bg-blue-600 flex mx-20 py-4 my-4 px-10 rounded-md cursor-pointer' onClick={()=>generateArray(10)}>Init</button>
      <button className='bg-blue-600 flex mx-20 py-4 my-4 px-10 rounded-md cursor-pointer' onClick={()=>bubbleSort(array)}>Bubble Sort</button>
      </div>
    
      <div className='flex w-full  justify-center h-[800px] overflow-hidden'>
        <div className='flex w-[800px] justify-center bg-red-500  rounded-xl'>
      {
        array.map((item)=>{
          return(
            <div key={item}  style={{ backgroundColor: `${item.color}`, margin: `5px`,height:`${item.value*900}px`,width:'50px'}}>&nbsp;</div>
          )
        })
      }
      </div>
      </div>
    </div>
    </>
  )
}

export default App
