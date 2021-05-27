import React, { useState } from 'react'

function InputField({ label, type, placeholder, name, handleChange }) {

    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={(e) => handleChange(e, name)} />
        </div>
    )
}

export default InputField;
