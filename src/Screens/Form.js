import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formFields } from '../constant'
import InputField from '../Components/InputField'
import { userAction } from '../Redux/Actions/UserAction'

function Form(props) {
    let [fieldValue, setFieldValue] = useState()
    let dispatch = useDispatch()
    let { page } = props
    let newForm = formFields[page]

    const handleChange = (e, name) => {
        setFieldValue({ ...fieldValue, [name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userAction(page.toUpperCase(), fieldValue))
    }

    if (!newForm) {
        return <div>page not found</div>
    }

    return (
        <div>
            <h1>{page}</h1>
            <form onSubmit={handleSubmit}>
                {newForm.map((field, index) => <InputField
                    key={index}
                    {...field}
                    handleChange={handleChange}
                />)
                }
                <button type="submit">{page}</button>
            </form>
        </div>
    )
}

export default Form
