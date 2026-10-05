import { useEffect, useState } from 'react';
import cartIcon from '../assets/icons/commerce_13815478.png';
import searchIcon from '../assets/icons/search_3838824.png';
import userIcon from '../assets/icons/user_4068164.png';

function Header({ onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <h1>My Website</h1>
            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav
                id="primary-navigation"
                className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
                aria-label="Primary navigation"
            >
                <div className="mobile-menu-heading">
                    <span>Menu</span>
                    <button type="button" onClick={() => setMenuOpen(false)}>Close</button>
                </div>
                <ul className="nav-links">
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Men</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Women</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Footwear</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Apparel</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Brands</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}><a>Sale</a></li>
                    <li className="nav-item" onClick={() => setMenuOpen(false)}>
                        <a
                            href="/about"
                            onClick={(event) => {
                                if (!onNavigate) return;
                                event.preventDefault();
                                onNavigate('/about');
                            }}
                            
                        >
                            About
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="Account">
                <img className="icon" src={cartIcon} alt="Cart" />
                <img className="icon" src={userIcon} alt="User" />
                <img className="icon" src={searchIcon} alt="Search" />
            </div>
            <button
                className={`menu-backdrop${menuOpen ? ' is-open' : ''}`}
                type="button"
                aria-label="Close navigation menu"
                aria-hidden={!menuOpen}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
            />
        </header>
    );
}
export default Header;