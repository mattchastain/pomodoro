import { LucideIcon } from 'lucide-react';

interface ButtonProps {
	label?: string;
	icon?: LucideIcon;
	iconSize?: number;
	onClick?: (() => void) | undefined;
	classes?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	variant?: 'default' | 'ghost' | 'outline';
}

export function Button({
	label,
	icon: Icon,
	iconSize = 18,
	onClick,
	classes,
	fullWidth = false,
	disabled = false,
	variant = 'default',
}: ButtonProps) {
	const baseClasses =
		`flex items-center h-max p-2 gap-1 rounded-lg font-bold md:text-sm md:font-medium cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transition-all ${classes}`;

	const variantClasses = {
		default: 'bg-neutral-300 hover:bg-neutral-200',
		ghost: 'hover:bg-neutral-300',
		outline: 'border-2 border-neutral-300 hover:border-neutral-500'
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${baseClasses} ${fullWidth && 'w-full'} ${
				variantClasses[variant]
			}`}
		>
			{Icon && <Icon size={iconSize} />}
			{label}
		</button>
	);
}
