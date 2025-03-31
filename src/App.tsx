import { Header, Timer } from './components';

export default function App() {
	return (
		<div className='flex flex-col gap-12 max-w-xl mx-auto'>
			<Header />
			<Timer />
		</div>
	);
}
