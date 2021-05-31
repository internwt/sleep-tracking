const InputField = ({ label, type, placeholder, name, handleChange, error, value, ...props }) => {
    console.log(`props,`, props)
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={(e) => handleChange(e, name)}
                value={value}
            />
            {error}
        </div>
    )
}

export default InputField;
