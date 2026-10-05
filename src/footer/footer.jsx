
function Footer() {
    const footerGroups = [
        {
            title: 'Shop',
            links: ["Men's", "Women's", 'Footwear', 'Apparel', 'Accessories', 'Sale'],
        },
        {
            title: 'Help',
            links: ['Contact', 'Shipping', 'Returns', 'Size Guides', 'Gift Analysis', 'FAQs'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Store - Glasgow', 'Sustainability', 'Careers', 'Wholesale', 'Press'],
        },
        {
            title: 'Follow',
            links: ['Instagram', 'Strava', 'TikTok', 'YouTube', 'Newsletter', 'Blog'],
        }
    ];
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<section className="footer-newsletter" aria-labelledby="footer-newsletter-title">
					<div>
						<h2 id="footer-newsletter-title">Join the Paceline club.</h2>
						<p>Early access to new drops, race-day tips, and 10% off your first order.</p>
					</div>
					<form className="footer-signup" onSubmit={(event) => event.preventDefault()}>
						<label className="footer-sr-only" htmlFor="footer-email">Email address</label>
						<input id="footer-email" type="email" placeholder="your@email.com" />
						<button type="submit">Subscribe</button>
					</form>
				</section>

				<div className="footer-main">
					<div className="footer-brand">
						<a className="footer-logo" href="#top">PACELINE</a>
						<p>Race-day gear, trail-tested essentials, and everyday running kit — curated in Glasgow since 2015.</p>
					</div>
					{footerGroups.map((group) => (
						<nav className="footer-group" aria-label={group.title} key={group.title}>
							<h3>{group.title}</h3>
							<ul>
								{group.links.map((link) => (
									<li key={link}><a href="#">{link}</a></li>
								))}
							</ul>
						</nav>
					))}
				</div>

				<div className="footer-bottom">
					<p>© 2028 Paceline Running Co. — All rights reserved.</p>
					<nav aria-label="Legal">
						<a href="#">Privacy</a>
						<a href="#">Terms</a>
						<a href="#">Cookies</a>
						<a href="#">Accessibility</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
