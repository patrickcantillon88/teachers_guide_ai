'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Generative AI in Education
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
            Implementation Guide for KS1/KS2 Teachers
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive resource to help primary school teachers understand and implement 
            artificial intelligence tools safely and effectively in their classrooms.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg text-slate-800">Comprehensive Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                16 detailed sections covering everything from AI basics to classroom implementation
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-lg text-slate-800">Teacher-Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                Designed specifically for primary school educators with practical examples
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <Shield className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-lg text-slate-800">Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                Comprehensive safeguarding guidance and compliance with UK regulations
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 space-y-4">
          <Link href="/contents">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-slate-500">
            Navigate through the guide at your own pace, designed for quick reference on any device
          </p>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Based on the latest UK Department for Education guidance and best practices
          </p>
        </div>
      </div>
    </div>
  )
}