import React, { useCallback, useState } from 'react'
import Head from '../sharing/Head'
import Datalist from '../sharing/Datalist'
import Button from '../sharing/Button'

function Contact() {
  const [age,Setage]=useState(30)
  const [salary,SetSalary]=useState(2000)

  const salaryData = useCallback(()=>{
    console.log("SalaryClicked");
    SetSalary(salary*1/10+500)
  },[salary])

  const ageLife =useCallback(()=>{
    console.log("AgeLifeClicked");
    Setage( age+5);
  },[age])
  return (
    <div>
      <h1>Performance HOOKS</h1>
      <div className='hookshead'>
      <Head></Head>
      <Datalist text={"Age"} value={age}></Datalist>
      <Datalist text={"Salary"} value={salary}></Datalist>
      <Button handleClick={ageLife}>ageClick</Button>
      <Button handleClick={salaryData}>salaryClick</Button>
      </div>


    </div>
  )
}

export default Contact
