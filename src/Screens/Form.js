import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../Redux/Actions/UserAction'
import Form from '../Components/Form'
import { formFields } from '../constant'
import { LOGIN, SIGNUP } from '../Redux/actionType'

function Pages(props) {
    let [fieldValue, setFieldValue] = useState({})
    let dispatch = useDispatch()
    let { page } = props
    let newForm = formFields[page]
    let [pageFields, setPageField] = useState(newForm)

    const handleChange = (e, name) => {
        let findField = pageFields.find((field, index) => field.name === name)
        findField['value'] = e.target.value
        let otherField = pageFields.filter((field, index) => field.name !== name)
        setPageField([...otherField, findField])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            dispatch(userAction(`${page.toUpperCase()}`, fieldValue))
        }
    }
    console.log(`fieldsva`, pageFields)

    const validateForm = () => {
        let flag = false

    }


    return (
        <div>
            <Form
                newForm={pageFields}
                page={page}
                {...fieldValue}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Pages
