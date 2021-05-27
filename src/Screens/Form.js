import { useState } from 'react'
import { formFields } from '../constant'
import InputField from '../Components/InputField'

function Form(props) {
    let [fieldValue, setFieldValue] = useState()
    let { page } = props
    let newForm = formFields[page]
    const handleChange = (e, name) => {
        setFieldValue({ ...fieldValue, [name]: e.target.value })
    }

    if (!newForm) {
        return <div>page not found</div>
    }

    return (
        <div>
            <h1>{page}</h1>
            <form>
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
