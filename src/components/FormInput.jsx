import './formInput.css';
const FormInput = ({ label, onChange, id, ...inputProps }) => {
	return (
		<div className='form-input'>
			<label htmlFor=''>{label}</label>
			<input {...inputProps} onChange={onChange} />
		</div>
	);
};

export default FormInput;
