import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from '../Components/InputField'
import { sleepAction } from '../Redux/Actions/SleepAction'

const SleepForm = () => {
   const [sleepData, setSleepData] = useState({})
   let dispatch = useDispatch()

   const handleChange = (e) => {
      let { name, value } = e.target
      sleepData[`${name}`] = value
      setSleepData({ ...sleepData })
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(sleepAction(sleepData))
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <InputField
               type="date"
               label='select a date'
               placeholder={'select a date'}
               name={'date'}
               handleChange={handleChange} />
            <InputField
               type="time"
               label='select sleep time'
               placeholder={'select sleep time'}
               name={'sleeptime'}
               handleChange={handleChange} />
            <InputField
               type="time"
               label='select walk up time'
               placeholder={'select walk up time'}
               name={'walkup'}
               handleChange={handleChange}
            />
            <button type={"submit"}>submit</button>
         </form>
      </div>
   )
}

export default SleepForm