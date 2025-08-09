'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"

const sections = [
	{ id: 1, title: "Understanding Generative AI", description: "What is AI and how it works in education" },
	{ id: 2, title: "AI Maturity Assessment", description: "Evaluate your school's AI readiness" },
	{ id: 3, title: "AI Tools for Education", description: "Overview of available AI tools and their applications" },
	{ id: 4, title: "Primary-Specific Implementation", description: "Age-appropriate AI applications for primary schools" },
	{ id: 5, title: "Cross-Curricular Integration", description: "Using AI across different subjects" },
	{ id: 6, title: "Prompt Engineering for Educators", description: "How to effectively communicate with AI" },
	{ id: 7, title: "Advanced Teaching Applications", description: "Sophisticated AI integration techniques" },
	{ id: 8, title: "Classroom Management & Operations", description: "Managing AI-enhanced classrooms" },
	{ id: 9, title: "Parent Communication & Engagement", description: "Working with parents on AI integration" },
	{ id: 10, title: "Assessment Strategies", description: "Evaluating learning in the AI era" },
	{ id: 11, title: "Professional Development Framework", description: "Training and support for teachers" },
	{ id: 12, title: "Implementation Considerations", description: "Technical and pedagogical factors" },
	{ id: 13, title: "Child Safety & Safeguarding", description: "Protecting students in the AI age" },
	{ id: 14, title: "UK Policy & Legal Requirements", description: "Compliance with regulations" },
	{ id: 15, title: "Emergency Protocols", description: "Responding to AI-related incidents" },
	{ id: 16, title: "Quick Reference", description: "Essential information at a glance" }
]

export default function Contents() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			{/* Navigation Header */}
			<header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
				<div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/">
						<Button variant="outline" size="sm" className="flex items-center gap-2">
							<Home className="h-4 w-4" />
							Home
						</Button>
					</Link>
					<h1 className="text-xl font-semibold text-slate-800">Table of Contents</h1>
					<div className="w-20"></div> {/* Spacer for alignment */}
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto p-4 py-6 page-transition">
				<div className="mb-6 text-center">
					<h2 className="text-2xl font-bold text-slate-800 mb-2">Guide Contents</h2>
					<p className="text-base text-slate-600">
						Click on any section to explore detailed guidance and practical examples
					</p>
				</div>

				{/* Sections Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
					{sections.map((section) => (
						<Link key={section.id} href={`/section/${section.id}`}>
							<Card className="border-slate-200 bg-white hover:shadow-md transition-all duration-200 cursor-pointer h-full aspect-square flex flex-col p-3">
								<div className="flex flex-col h-full justify-center items-center gap-2">
									<div className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-slate-400 leading-none">
										{section.id}
									</div>
									<CardTitle className="text-[clamp(0.75rem,2.5vw,1rem)] font-medium text-slate-800 text-center leading-tight">
										{section.title}
									</CardTitle>
								</div>
							</Card>
						</Link>
					))}
				</div>

				{/* Quick Navigation Tips */}
				<div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
					<h3 className="text-base font-semibold text-slate-800 mb-2">Navigation Tips</h3>
					<ul className="space-y-1 text-sm text-slate-600">
						<li className="flex items-start gap-2">
							<span className="text-blue-600 mt-1">•</span>
							<span>Each section includes navigation buttons to move between chapters</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-blue-600 mt-1">•</span>
							<span>The home button is always available in the top navigation</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-blue-600 mt-1">•</span>
							<span>Content is optimized for both mobile and desktop viewing</span>
						</li>
					</ul>
				</div>
			</main>
		</div>
	)
}