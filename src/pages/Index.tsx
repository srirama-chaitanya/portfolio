import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, FileText, BookOpen } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import {
	SiLeetcode,
	// SiGeeksforgeeks,
	SiReact,
	SiNodedotjs,
	SiTypescript,
	SiPython,
	// SiFlask,
	SiTailwindcss,
	SiFramer,
	SiGit,
	SiHtml5,
	SiCss3,
	SiJavascript,

  	SiSqlite,
	SiMongodb,
} from "react-icons/si";
import avatar from "@/assets/avatar.jpg";
import { useRef } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";

const SOCIALS = [
	{
		href: "mailto:sriramchaitanya06@gmail.com",
		label: "Email",
		icon: <Mail className="size-5" />,
	},
	{
		href: "https://www.linkedin.com/in/srirama-chaitanya-devulapalli",
		label: "LinkedIn",
		icon: <Linkedin className="size-5" />,
	},
	{
		href: "https://github.com/srirama-chaitanya",
		label: "GitHub",
		icon: <Github className="size-5" />,
	},
	{
		href: "https://x.com/Sriram30990625",
		label: "X (Twitter)",
		icon: <FaXTwitter className="size-5" />,
	},
	{
		href: "https://leetcode.com/u/SriramDevulapalli/",
		label: "LeetCode",
		icon: <SiLeetcode className="size-5" />,
	},
	
];

const ADVANCED_PROJECTS = [
	{
		name: "Automation Hub",
		desc: "An email-to-issue automation platform with React frontend and Node.js backend.",
		url: "https://github.com/srirama-chaitanya/automation_hub",
		tags: ["React", "Node.js", "Redis", "SQLite"],
	},
	{
		name: "MFU-Simulator",
		desc: "A warehouse simulator for layout optimization, pathfinding, and efficiency analytics.",
		url: "https://github.com/srirama-chaitanya/MFU-Simulator",
		tags: ["React", "Node.js", "PostgreSQL", "Pathfinding"],
	},
	{
		name: "Nxt-Trends",
		desc: "A React e-commerce frontend with dynamic product filtering and cart management.",
		url: "https://github.com/srirama-chaitanya/Nxt-Trends",
		tags: ["React", "Context API", "API Integration"],
	},
];

const INTERMEDIATE_PROJECTS = [
	{
		name: "Jobby App",
		desc: "A React frontend for job listings integrated with backend APIs from NxtWave.",
		url: "https://github.com/srirama-chaitanya/JobbyApp",
		tags: ["React", "API Integration"],
	},
	{
		name: "Nxt-Watch",
		desc: "A React frontend for a video streaming platform integrated with NxtWave APIs.",
		url: "https://github.com/srirama-chaitanya/nxtWatch",
		tags: ["React", "API Integration"],
	},
	{
		name: "Twitter Clone API",
		desc: "A React game to play Rock Paper Scissors against the computer.",
		url: "https://github.com/srirama-chaitanya/twitter_clone_backend",
		tags: ["Node.js", "Express", "JWT", "REST API"],
	},
];

const BASIC_PROJECTS = [
	{
		name: "MatchGame",
		desc: "A React game where players click unique emojis without repeating.",
		url: "https://github.com/srirama-chaitanya/MatchGame",
		tags: ["React"],
	},
	{
		name: "RockPaperScissors",
		desc: "A React game to play Rock Paper Scissors against the computer.",
		url: "https://github.com/srirama-chaitanya/RockPaperScissors",
		tags: ["React"],
	},
	{
		name: "ExFolio",
		desc: "A portfolio design project focusing on UI design, Bootstrap grid, and flexbox practice.",
		url: "https://github.com/srirama-chaitanya/sriram_portfolio",
		tags: ["HTML", "CSS", "Bootstrap"],
	},
];

const SKILLS = [
	{ name: "React", icon: <SiReact size={28} /> },
	{ name: "Node.js", icon: <SiNodedotjs size={28} /> },
	{ name: "TypeScript", icon: <SiTypescript size={28} /> },
	{ name: "Python", icon: <SiPython size={28} /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
	{ name: "Framer Motion", icon: <SiFramer size={28} /> },
	{ name: "Git", icon: <SiGit size={28} /> },
	{ name: "HTML5", icon: <SiHtml5 size={28} /> },
	{ name: "CSS3", icon: <SiCss3 size={28} /> },
	{ name: "JavaScript", icon: <SiJavascript size={28} /> },
	{ name: "SQLite", icon: <SiSqlite size={28} /> },
	{ name: "MongoDB", icon: <SiMongodb size={28} /> },
	{ name: "Java", icon: <FaJava size={28} style={{ color: '#ffffff', filter: 'brightness(1.2)' }} /> },
];

const Index = () => {
	const emailRef = useRef<HTMLAnchorElement>(null);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("sriramchaitanya06@gmail.com");
		if (emailRef.current) {
			emailRef.current.innerText = "Copied!";
			setTimeout(() => {
				if (emailRef.current)
					emailRef.current.innerText = "sriramchaitanya06@gmail.com";
			}, 1200);
		}
	};

	return (
		<main className="min-h-screen bg-grid-light dark:bg-grid-dark overflow-x-hidden">
			<SEO
				title="Srirama Chaitanya | Competetive Programmer & Full Stack Developer"
				description="Portfolio of Srirama Chaitanya: Competetive Programmer & Full Stack Web Developer. Projects, Skills, about, contact."
				type="website"
				image="https://res.cloudinary.com/dplujo3dd/image/upload/v1726763668/DS_Chaitanya_origin_qzonyg.jpg"
			/>

			{/* Hero */}
			<section
				id="home"
				className="container mx-auto pt-24 pb-20 text-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				>
					<div className="relative inline-block mb-8">
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<img
								src={avatar}
								alt="Portrait of Srirama Chaitanya"
								loading="eager"
								className="h-48 w-48 rounded-full object-cover shadow-lg"
							/>
						</motion.div>
					</div>

					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight font-display mb-4">
						Hi, I'm <span className="text-primary">Srirama Chaitanya</span>
					</h1>

					<p className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-8 max-w-3xl mx-auto">
						I'm a Competetive Programmer & Full Stack Web Developer building digital experiences that matter.
					</p>

					<div className="flex justify-center flex-wrap gap-4 mb-12">
						<Button asChild size="lg">
							<a
								href="#about"
								onClick={(e) => {
								e.preventDefault();
								const el = document.getElementById("about");
								if (el) el.scrollIntoView({ behavior: "smooth" });
								}}
							>
								<BookOpen className="size-5 mr-2" />
								Know More
							</a>
						</Button>
						<Button asChild variant="secondary" size="lg">
							<a
								href="https://drive.google.com/file/d/1zubDOI35gfDgJvHZRMXekKgaN2BusfP4/view"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FileText className="size-5 mr-2" />
								Download Resume
							</a>
						</Button>
					</div>

					<div className="flex justify-center flex-wrap items-center gap-4">
						{SOCIALS.map((s) => (
							<Button
								asChild
								variant="outline"
								size="icon"
								aria-label={s.label}
								title={s.label}
								className="transition-all hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary"
								key={s.label}
							>
								<a href={s.href} target="_blank" rel="noopener">
									{s.icon}
								</a>
							</Button>
						))}
					</div>
				</motion.div>
			</section>

			{/* Projects */}
			<section id="projects" className="container mx-auto py-16">
				<header className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Featured Projects
					</h2>
					<p className="text-muted-foreground mt-2">
						A selection of my favorite work.
					</p>
				</header>
				<Tabs defaultValue="advanced" className="w-full">
					<TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
						<TabsTrigger value="advanced">Advanced</TabsTrigger>
						<TabsTrigger value="intermediate">Intermediate</TabsTrigger>
						<TabsTrigger value="basic">Basic</TabsTrigger>
					</TabsList>
					<TabsContent value="advanced" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{ADVANCED_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="intermediate" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{INTERMEDIATE_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="basic" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{BASIC_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</section>

			{/* Skills */}
			<section id="skills" className="container mx-auto py-16">
				<header className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Skills & Expertise
					</h2>
					<p className="text-muted-foreground mt-2">
						The tools and technologies I use to build things.
					</p>
				</header>
				<div className="flex flex-wrap justify-center gap-4">
					{SKILLS.map((skill) => (
						<div
							key={skill.name}
							className="flex items-center gap-3 rounded-lg border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-4 shadow-elevated hover:shadow-lg transition-shadow"
						>
							{skill.icon}
							<span className="font-medium">{skill.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section id="about" className="container mx-auto py-16">
				<div className="grid gap-12 md:grid-cols-3 items-center">
					<div className="md:col-span-2">
						<h2 className="text-3xl font-bold tracking-tight font-display mb-4">
							About Me
						</h2>
						<div className="space-y-4 text-muted-foreground max-w-prose">
							<p>
								Hello! I’m a passionate developer who loves transforming ideas into impactful digital solutions. I enjoy tackling challenging problems that blend creativity with logic, from designing intuitive web experiences to optimizing complex algorithms.
							</p>
							<p>
								With hands-on experience in full-stack development, data structures and algorithms, and emerging technologies like Generative AI, I’m constantly exploring new ways to innovate and grow as a developer. I believe in writing clean, purposeful code and collaborating to bring meaningful projects to life.
							</p>
							<p>
								My work blends technical expertise with creativity to deliver solutions that make a difference. I'm always eager to take on new challenges and contribute to projects that push the boundaries of what's possible on the web.
							</p>
						</div>
					</div>
					<div className="rounded-lg border bg-card/70 backdrop-blur p-6 shadow-elevated supports-[backdrop-filter]:bg-card/50 space-y-4">
						<h3 className="text-lg font-semibold font-display">Quick Facts</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Focus:</span>
								<span>Full Stack Development, CP</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Stack:</span>
								<span>React, JS, Tailwind, Java</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Location:</span>
								<span>Remote</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="container mx-auto py-16 text-center">
				<header className="mb-6">
					<h2 className="text-4xl font-bold tracking-tight font-display">
						Let's Connect
					</h2>
					<p className="text-muted-foreground mt-2 max-w-lg mx-auto">
						Have a project in mind, or just want to say hi? I'd love to hear from you.
					</p>
				</header>
				<div className="flex flex-col items-center gap-4">
					<a
						ref={emailRef}
						href="mailto:guleriaashish85@gmail.com"
						className="text-lg font-semibold underline-offset-4 hover:underline hover:text-primary transition-colors cursor-pointer"
						aria-label="Email Ashish Guleria"
						title="Email Ashish Guleria"
						onClick={(e) => {
							e.preventDefault();
							handleCopyEmail();
						}}
					>
						sriramchaitanya06@gmail.com
					</a>
					<Button
						size="sm"
						variant="outline"
						onClick={handleCopyEmail}
						aria-label="Copy email to clipboard"
						title="Copy email to clipboard"
					>
						Copy Email
					</Button>
				</div>
				<div className="text-sm text-muted-foreground mt-6">
					I usually respond within 24 hours.
				</div>
			</section>

			<footer className="border-t py-8">
  				<div className="container mx-auto text-sm text-muted-foreground flex justify-center items-center">
    				<span className="text-center">
      					© {new Date().getFullYear()} Devulapalli Srirama Chaitanya. All rights reserved.
    				</span>
  				</div>
			</footer>
		</main>
	);
};

export default Index;
