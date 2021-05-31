import React from 'react'
import InputField from './InputField'
function Form({ newForm, page, handleChange, handleSubmit, ...props }) {


    return (
        <div>
            <h1>{page}</h1>
            <form onSubmit={handleSubmit}>
                {newForm.map((field, index) =>
                    <InputField
                        key={index}
                        label={field.label}
                        type={field.type}
                        value={field.value}
                        placeholder={field.placeholder}
                        name={field.name}
                        handleChange={handleChange}
                        error={field.error}
                    />)}
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
