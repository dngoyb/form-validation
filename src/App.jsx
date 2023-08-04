import { useState } from 'react';
import './app.css';
import FormInput from './components/formInput';
import { useRef } from 'react';

function App() {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birtday: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'username',
			label: 'username',
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			label: 'Email',
		},
		{
			id: 3,
			name: 'birtday',
			type: 'text',
			placeholder: 'Birtday',
			label: 'Birtday',
		},
		{
			id: 4,
			name: 'password',
			type: 'text',
			placeholder: 'Password',
			label: 'Password',
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'text',
			placeholder: 'Confirm Password',
			label: 'Confirm Password',
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	console.log(values);

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}

				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
