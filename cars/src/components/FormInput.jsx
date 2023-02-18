const FormInput = (props) => {
    const { label, placeholder, type, onChange, name } = props
    return (
      <div className="formInput my-2 flex flex-row items-center">
          <label className="font-small">{label}</label>
          <input 
              className="p-1 mx-2 rounded-md border-2 border-pink-300 flex-1" 
              placeholder={placeholder}
              type={type}
              name={name}
              onChange={onChange}
              autoComplete="off"
               />
      </div>
    )
  }  
  export default FormInput