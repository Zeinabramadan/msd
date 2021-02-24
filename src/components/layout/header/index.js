import React from 'react'
import Search from '../../search'
import './styles.scss'

function Header() {
	return (
		<header className='header'>
			<h1 className='logo'>
				<a href='#'>Viulive</a>
			</h1>
			<Search />
			<nav className='nav'>
				<ul>
					<li className='nav__item'>
						<i className='fi flaticon-user' />
						<span>Welcome to Viulive</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
