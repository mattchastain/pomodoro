interface InputProps {
	value: number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: InputProps) {
	return (
		<input
			id='study-time'
			type='number'
			value={value}
			min='5'
			step='5'
			placeholder={value.toString()}
			onChange={onChange}
			className='border-2 border-neutral-500/50 rounded-lg p-2 w-full'
		></input>
	);
}
