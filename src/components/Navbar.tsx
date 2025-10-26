import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars, FaXTwitter } from "react-icons/fa6";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
	{ id: "home", label: "Home" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "about", label: "About" },
];

export const Navbar = () => {
	const [active, setActive] = useState<string>("home");
	const location = useLocation();
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (location.pathname !== "/") return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target instanceof HTMLElement) {
						setActive(entry.target.id);
					}
				});
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
		);

		sections.forEach((s) => {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [location.pathname]);

	const onNavClick = (id: string) => (e: React.MouseEvent) => {
		e.preventDefault();
		setMobileOpen(false);

		// If not on homepage, navigate first then scroll after navigation completes
		if (location.pathname !== "/") {
			navigate("/", { replace: false });
			setTimeout(() => {
				const el = document.getElementById(id);
				el?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 90);
			return;
		}

		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/60 dark:bg-background/70 border-b ${
				scrolled ? "shadow-sm h-16" : "shadow-none h-20"
			}`}
		>
			<nav className="container mx-auto flex items-center justify-between px-4 h-full">
				<Link
					to="/"
					className="flex items-center gap-3 group"
					onClick={() => setMobileOpen(false)}
				>
					<span
						className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white dark:bg-background dark:text-primary text-lg font-bold shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
						aria-hidden
					>
						SC
					</span>
					<span className="hidden sm:inline font-extrabold tracking-tight text-lg md:text-xl text-foreground transition-colors duration-200 group-hover:text-primary">
						Srirama Chaitanya
					</span>
				</Link>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-6">
					{sections.map((s) => (
						<a
							key={s.id}
							href={`#${s.id}`}
							onClick={onNavClick(s.id)}
							className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
								active === s.id ? "text-primary" : "text-muted-foreground hover:text-primary"
							}`}
							aria-current={active === s.id ? "page" : undefined}
						>
							<span className="relative z-10">{s.label}</span>
							<span
								aria-hidden
								className={`absolute inset-0 rounded-md pointer-events-none transition-all duration-300 ${
									active === s.id ? "bg-primary/8" : "bg-transparent"
								}`}
							/>
						</a>
					))}

					{/* <Link
						to="/blog"
						className="relative px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
						onClick={() => setMobileOpen(false)}
					>
						Blog
					</Link> */}
				</div>

				{/* Right side */}
				<div className="flex items-center gap-3">
					<a
						href="https://www.linkedin.com/in/srirama-chaitanya-devulapalli"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full hover:bg-primary/15 transition-transform duration-200 transform hover:scale-105"
						aria-label="LinkedIn"
						title="LinkedIn"
					>
						<FaLinkedin className="size-5 text-black dark:text-white" />
					</a>

					<a
						href="https://github.com/srirama-chaitanya"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full hover:bg-primary/15 transition-transform duration-200 transform hover:scale-105"
						aria-label="GitHub"
						title="GitHub"
					>
						<FaGithub className="size-5 text-black dark:text-white" />
					</a>

					<a
						href="https://x.com/Sriram30990625"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full hover:bg-primary/15 transition-transform duration-200 transform hover:scale-105"
						aria-label="X"
						title="X"
					>
						<FaXTwitter className="size-5 text-black dark:text-white" />
					</a>

					<ThemeToggle />

					<button
						className="md:hidden p-2 rounded-md ml-1 hover:bg-muted/10 transition-colors"
						onClick={() => setMobileOpen((v) => !v)}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						{mobileOpen ? <span className="text-2xl leading-none">×</span> : <FaBars className="size-5" />}
					</button>
				</div>
			</nav>

			{/* Mobile panel */}
			<div
				className={`md:hidden transform origin-top transition-all duration-200 ${
					mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
				}`}
			>
				<div className="px-4 pb-4">
					<div className="flex flex-col gap-2 bg-card/70 rounded-md p-3 shadow-md">
						{sections.map((s) => (
							<a
								key={s.id}
								href={`#${s.id}`}
								onClick={onNavClick(s.id)}
								className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
									active === s.id ? "text-primary bg-primary/6" : "text-foreground hover:text-primary"
								}`}
							>
								{s.label}
							</a>
						))}

						{/* <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
							Blog
						</Link> */}
					</div>
				</div>
			</div>
		</header>
	);
};
