import { useState } from 'react';
import './formInput.css';
const FormInput = ({ label, onChange, id, errorMessage, ...inputProps }) => {
	const [focused, setFocused] = useState(false);
	return (
		<div className='form-input'>
			<label htmlFor=''>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={() => setFocused(true)}
				onFocus={() =>
					inputProps.name === 'confirmedPassword' && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
