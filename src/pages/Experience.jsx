import { motion } from "framer-motion";

const experiences = [
	{
		title: "Google Developer Group, SRM",
		role: "Technical Team Member",
		duration: "May 2025 - Present",
		description:
			"Built QR code scanner for event check-in and streamlined event management.",
	},
	{
		title: "Computer Society of India, SRM",
		role: "Team Member",
		duration: "Feb 2025 - Present",
		description: "Contributed to tech events and workshops on campus.",
	},
	{
		title: "Social Winter of Code 5.0",
		role: "Open Source Contributor",
		duration: "Jan 2025 - Mar 2025",
		description: "Top 100 contributors globally to real-world open source projects.",
	},
];

export default function Experience() {
	return (
		<motion.section
			id="experience"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="min-h-screen px-4 py-10 text-center"
		>
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl font-bold mb-10 text-white"
			>
				Experience
			</motion.h2>

			<div className="max-w-4xl mx-auto space-y-6 text-left">
				{experiences.map((exp, idx) => (
					<motion.div
						key={idx}
						whileHover={{ scale: 1.02 }}
						className="bg-white/5 border border-white/10 shadow-xl backdrop-blur-2xl p-6 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:ring-1 hover:ring-white/20"
					>
						<h3 className="text-white text-xl font-semibold">{exp.title}</h3>
						<p className="text-gray-300 text-sm">
							{exp.role} | {exp.duration}
						</p>
						<p className="text-gray-400 mt-2">{exp.description}</p>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
