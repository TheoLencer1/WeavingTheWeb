import React from "react";

const Navbar = () => {
	return (
		<nav className="min-w-full flex justify-between items-center px-20 py-6 bg-white shadow-md">
			<header className="text-2xl font-extrabold text-[#FF4A48]">
				YouVersion
			</header>

			<ul className="flex items-center gap-10 text-xl font-medium">
				<li>Product</li>
				<li>About</li>
				<li>Press</li>
				<li className="bg-[#FF4A48] text-white px-3 p-1 rounded">Give</li>
			</ul>
		</nav>
	);
};

export default Navbar;
