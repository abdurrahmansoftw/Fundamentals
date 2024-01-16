interface navbarProps {
	cartItemsCount: number
}

const Navbar = ({ cartItemsCount }: navbarProps) => {
	return (
		<div>
			<h1>Navbar: {cartItemsCount}</h1>
		</div>
	)
}

export default Navbar
