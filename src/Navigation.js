import {Link} from 'react-router-dom'

function Navigation(){
	return(
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/products">Products</Link>
			<Link to="/contact">Contact</Link>
		</div>
		)
}
export default Navigation