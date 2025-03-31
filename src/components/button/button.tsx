import { LucideIcon } from 'lucide-react';

interface ButtonProps {
	label?: string;
	icon?: LucideIcon;
	onClick?: (() => void) | undefined;
	fullWidth?: boolean;
	disabled?: boolean;
	variant?: 'default' | 'ghost';
}

export function Button({
	label,
	icon: Icon,
	onClick,
	fullWidth = false,
	disabled = false,
	variant = 'default',
}: ButtonProps) {
	const baseClasses =
		'flex items-center h-max p-2 gap-2 rounded-lg text-xs font-bold md:text-sm md:font-medium cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transition-all';

	const variantClasses = {
		default: '',
		ghost: '',
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${baseClasses} ${fullWidth && 'w-full'} ${
				variantClasses[variant]
			}`}
		>
			{Icon && <Icon size={18} />}
			{label}
		</button>
	);
}
