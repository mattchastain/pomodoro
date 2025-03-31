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
	icon,
	onClick,
	fullWidth,
	disabled,
	variant,
}: ButtonProps) {
	return <button></button>;
}
