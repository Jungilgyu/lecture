export default function TabButton({ children, onSelect, isSelected }) {


	return (
		<li>
			<button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
		</li>
	);
}
// onClick={} 여기 안에서 handleClick을 실행하면 안됨  onClick={handleClick()} 일케적으면 안된다는 뜻