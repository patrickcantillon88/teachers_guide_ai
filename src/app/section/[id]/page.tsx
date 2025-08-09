'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Home, ChevronLeft, ChevronRight } from "lucide-react"
import { useParams, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Section content extracted from the markdown document
const sectionsData = {
  1: {
    title: "Understanding Generative AI",
    content: [
      {
        type: "heading",
        text: "What is Generative AI?"
      },
      {
        type: "paragraph",
        text: "Generative AI creates new content (text, images, audio, code) by learning patterns from vast datasets. Unlike traditional programming with fixed rules, Gen AI produces probabilistic, adaptive outputs."
      },
      {
        type: "callout",
        text: "School Analogy: Like a student who reads thousands of books and can now write original stories in any style, but sometimes makes confident mistakes."
      },
      {
        type: "heading",
        text: "Key Types of AI Models"
      },
      {
        type: "list",
        items: [
          "Large Language Models (LLMs): GPT, Claude, Gemini - for text generation",
          "Diffusion Models: DALL·E, Midjourney - for image creation",
          "Multimodal AI: Tools that combine text, image, and audio processing",
          "Audio Generation: AI composition and sound design tools"
        ]
      },
      {
        type: "heading",
        text: "Foundation Concepts"
      },
      {
        type: "list",
        items: [
          "Parameters: Model size/complexity (bigger ≠ always better)",
          "Tokens: Text chunks AI processes (context window limits)",
          "Hallucinations: Confident but incorrect outputs",
          "Bias: Models reflect training data prejudices",
          "Foundation Models: Large-scale pre-trained systems serving as base for applications"
        ]
      },
      {
        type: "heading",
        text: "AI vs Traditional Programming"
      },
      {
        type: "list",
        items: [
          "Traditional Programming: Deterministic, rule-based, predictable outputs",
          "Generative AI: Probabilistic, pattern-based, adaptive but sometimes unpredictable"
        ]
      }
    ]
  },
  2: {
    title: "AI Maturity Assessment",
    content: [
      {
        type: "heading",
        text: "6-Stage AI Maturity Framework"
      },
      {
        type: "paragraph",
        text: "A self-diagnostic tool designed to evaluate the current state of AI preparedness within your educational institution:"
      },
      {
        type: "heading",
        text: "Stage 1: Unaware"
      },
      {
        type: "list",
        items: [
          "No AI use or policies in place",
          "Staff unfamiliar with AI capabilities",
          "No discussion of AI in educational context"
        ]
      },
      {
        type: "heading",
        text: "Stage 2: Experimenting"
      },
      {
        type: "list",
        items: [
          "Individual teachers trying AI tools independently",
          "No coordinated approach or sharing",
          "Informal exploration without policy framework"
        ]
      },
      {
        type: "heading",
        text: "Stage 3: Exploring"
      },
      {
        type: "list",
        items: [
          "Departmental discussions about AI potential",
          "Some pilot projects beginning",
          "Initial policy discussions starting"
        ]
      },
      {
        type: "heading",
        text: "Stage 4: Embedding"
      },
      {
        type: "list",
        items: [
          "School-wide policies and training programs",
          "Coordinated implementation across departments",
          "Regular professional development sessions"
        ]
      },
      {
        type: "heading",
        text: "Stage 5: Optimizing"
      },
      {
        type: "list",
        items: [
          "Integrated pedagogical use across curriculum",
          "Data-driven refinement of AI applications",
          "Advanced staff confidence and competence"
        ]
      },
      {
        type: "heading",
        text: "Stage 6: Transforming"
      },
      {
        type: "list",
        items: [
          "AI fundamentally redefines learning models",
          "Innovation in educational practices",
          "Leading-edge implementation and sharing"
        ]
      },
      {
        type: "heading",
        text: "Assessment Questions"
      },
      {
        type: "list",
        items: [
          "What stage best describes your current situation?",
          "What specific steps would move you to the next level?",
          "What resources or support do you need to progress?"
        ]
      }
    ]
  },
  3: {
    title: "AI Tools for Education",
    content: [
      {
        type: "heading",
        text: "General-Purpose Tools"
      },
      {
        type: "table",
        headers: ["Tool", "Best For", "Classroom Analogy", "Key Features", "Limitations"],
        rows: [
          ["ChatGPT", "Flexible lesson planning, writing support", "All-purpose teaching assistant", "Conversational, adaptable, free tier", "May need detailed prompts"],
          ["Claude", "Structured content, long form writing", "Organized essay editor", "Better for detailed analysis", "Less real-time availability"],
          ["Copilot", "Document editing, spreadsheets", "Admin assistant for MS Office", "Seamless Office integration", "Limited pedagogical focus"],
          ["Gemini", "Google Workspace integration", "Tech coordinator for Google tools", "Works with Docs, Sheets, Slides", "Integration dependencies"]
        ]
      },
      {
        type: "heading",
        text: "Education-Specific Tools"
      },
      {
        type: "table",
        headers: ["Tool", "Age Group", "Primary Use", "Special Features", "Subscription"],
        rows: [
          ["Khanmigo", "KS1-KS4", "Adaptive tutoring", "Personalizes to student responses", "Subject-specific scope"],
          ["MagicSchool.ai", "All stages", "Differentiated planning", "Pre-built education templates", "Subscription required"],
          ["TeachFlow", "KS2-KS4", "Assessment design", "Curriculum-aligned quizzes", "Premium features"],
          ["Buddy.ai", "EYFS-KS1", "Speech development", "Voice-based language games", "Free tier available"],
          ["Synthesia", "All stages", "Video creation", "AI avatars for lesson videos", "Professional use"]
        ]
      }
    ]
  },
  4: {
    title: "Primary-Specific Implementation",
    content: [
      {
        type: "heading",
        text: "Age-Appropriate AI Applications"
      },
      {
        type: "heading",
        text: "Early Years Foundation Stage (Ages 3-5)"
      },
      {
        type: "table",
        headers: ["Activity", "AI Tool", "Implementation", "Safety Notes"],
        rows: [
          ["Story Creation", "ChatGPT", "Teacher generates simple stories about class topics", "Pre-screen all content"],
          ["Song & Rhymes", "ChatGPT", "Create custom nursery rhymes for learning", "Check for appropriate language"],
          ["Visual Aids", "DALL·E", "Generate simple illustrations for concepts", "Review all images first"],
          ["Routine Charts", "Canva AI", "Design visual timetables and instructions", "Ensure clarity and simplicity"]
        ]
      },
      {
        type: "callout",
        text: "EYFS Key Principles: Adult-mediated only - Children never directly use AI • Play-based integration - AI supports natural learning • Language development - Focus on vocabulary building • Creative expression - AI sparks imagination, doesn't replace it"
      },
      {
        type: "heading",
        text: "Key Stage 1 (Ages 5-7)"
      },
      {
        type: "table",
        headers: ["Subject", "AI Application", "Example Activity", "Learning Outcome"],
        rows: [
          ["Phonics", "ChatGPT", "Generate decodable sentences", "Phoneme recognition"],
          ["Mathematics", "ChatGPT", "Create word problems with familiar contexts", "Problem-solving skills"],
          ["Science", "DALL·E", "Visual representations of scientific concepts", "Conceptual understanding"],
          ["History", "ChatGPT", "Simple stories about historical periods", "Historical awareness"],
          ["Geography", "ChatGPT", "Describe different environments", "Place knowledge"],
          ["Art", "DALL·E", "Inspiration images for creative work", "Artistic expression"]
        ]
      }
    ]
  },
  5: {
    title: "Cross-Curricular Integration",
    content: [
      {
        type: "heading",
        text: "Subject-Specific Applications"
      },
      {
        type: "heading",
        text: "English Language Arts"
      },
      {
        type: "list",
        items: [
          "Writing Support: Story starters, character development, plot suggestions",
          "Vocabulary Expansion: Age-appropriate synonyms and definitions",
          "Peer Review: Template feedback forms and editing checklists",
          "Reading Comprehension: Simplified summaries and discussion questions"
        ]
      },
      {
        type: "callout",
        text: "Example Implementation: Create a character description template for Year 4 students writing fantasy stories. Include prompts for appearance, personality, and magical abilities."
      },
      {
        type: "heading",
        text: "Science"
      },
      {
        type: "list",
        items: [
          "Diagram Generation: Labeled illustrations of scientific processes",
          "Experiment Design: Safe, age-appropriate investigation ideas",
          "Data Analysis: Simple interpretation frameworks",
          "Concept Explanation: Complex ideas broken into child-friendly language"
        ]
      },
      {
        type: "callout",
        text: "Example Implementation: Explain photosynthesis to Year 3 students using simple words and suggest a hands-on activity they can do in class."
      },
      {
        type: "heading",
        text: "Mathematics"
      },
      {
        type: "list",
        items: [
          "Problem Explanation: Step-by-step breakdowns of calculations",
          "Visual Modeling: Diagrams and representations of mathematical concepts",
          "Assessment Creation: Differentiated questions at various difficulty levels",
          "Real-world Applications: Connecting math to everyday situations"
        ]
      },
      {
        type: "callout",
        text: "Example Implementation: Create 10 word problems about money for Year 2 students, using coins up to £1. Include a mix of addition and subtraction."
      }
    ]
  },
  6: {
    title: "Prompt Engineering for Educators",
    content: [
      {
        type: "heading",
        text: "Core Prompting Strategies"
      },
      {
        type: "heading",
        text: "1. Role-Based Prompts"
      },
      {
        type: "callout",
        text: "Act as a Year 6 science teacher. Explain photosynthesis using simple language and include a hands-on activity."
      },
      {
        type: "heading",
        text: "2. Constraint Prompts"
      },
      {
        type: "callout",
        text: "Create a 200-word summary of the water cycle for EAL learners, using only present tense verbs."
      },
      {
        type: "heading",
        text: "3. Few-Shot Prompting"
      },
      {
        type: "callout",
        text: "Here are two example quiz questions: 1. What gas do plants absorb? (Carbon dioxide) 2. Where does photosynthesis happen? (Leaves) Now create 3 more questions about plant nutrition."
      },
      {
        type: "heading",
        text: "4. Chain-of-Thought"
      },
      {
        type: "callout",
        text: "Let's work through this step by step: 1. First, identify the main causes of climate change 2. Then, explain how each cause affects temperature 3. Finally, suggest one solution for each cause"
      },
      {
        type: "heading",
        text: "5. Zero-Shot vs Few-Shot"
      },
      {
        type: "list",
        items: [
          "Zero-Shot: Direct request without examples",
          "Few-Shot: Provide 1-3 examples of desired output format"
        ]
      }
    ]
  },
  7: {
    title: "Advanced Teaching Applications",
    content: [
      {
        type: "heading",
        text: "Sophisticated AI Integration"
      },
      {
        type: "heading",
        text: "Multimodal Content Creation"
      },
      {
        type: "list",
        items: [
          "Text + Image: AI-generated worksheets with custom illustrations",
          "Text + Video: Script creation for educational videos with AI avatars",
          "Audio + Text: Pronunciation guides and listening comprehension materials"
        ]
      },
      {
        type: "heading",
        text: "Real-time Feedback Systems"
      },
      {
        type: "list",
        items: [
          "Writing Support: Instant grammar and style suggestions",
          "Mathematical Problem-solving: Step-by-step guidance during lessons",
          "Reading Comprehension: Adaptive questioning based on student responses"
        ]
      },
      {
        type: "heading",
        text: "Group Work Facilitation Tools"
      },
      {
        type: "list",
        items: [
          "Role Assignment: AI suggests optimal group compositions",
          "Task Distribution: Automated breakdown of complex projects",
          "Collaboration Monitoring: Track individual contributions",
          "Conflict Resolution: Structured discussion frameworks"
        ]
      },
      {
        type: "heading",
        text: "Metacognition and Reflection Prompts"
      },
      {
        type: "list",
        items: [
          "Learning Journals: AI-generated reflection questions",
          "Goal Setting: Personalized learning objectives",
          "Self-Assessment: Rubrics adapted to individual student needs",
          "Progress Tracking: Visual representations of learning journey"
        ]
      }
    ]
  },
  8: {
    title: "Classroom Management & Operations",
    content: [
      {
        type: "heading",
        text: "Lesson Timing & Integration"
      },
      {
        type: "heading",
        text: "5-Minute AI Activities"
      },
      {
        type: "list",
        items: [
          "Warm-up questions generated by AI",
          "Quick fact checks using AI",
          "Vocabulary explanations for new words",
          "Transition activities with AI riddles"
        ]
      },
      {
        type: "heading",
        text: "10-15 Minute AI Segments"
      },
      {
        type: "list",
        items: [
          "Demonstration of AI tool use",
          "Group discussion about AI outputs",
          "Collaborative editing of AI content",
          "Problem-solving with AI support"
        ]
      },
      {
        type: "heading",
        text: "Full Lesson Integration"
      },
      {
        type: "list",
        items: [
          "Research projects enhanced with AI",
          "Creative writing workshops",
          "Science investigations with AI explanations",
          "Cross-curricular themes supported by AI"
        ]
      },
      {
        type: "heading",
        text: "Digital Classroom Management"
      },
      {
        type: "heading",
        text: "AI-Enhanced Organization"
      },
      {
        type: "list",
        items: [
          "Lesson Planning: Automated scheduling and resource allocation",
          "Data Analysis: Student progress tracking and intervention identification",
          "Communication: Parent update templates and meeting preparation",
          "Administrative Tasks: Report writing and documentation support"
        ]
      }
    ]
  },
  9: {
    title: "Parent Communication & Engagement",
    content: [
      {
        type: "heading",
        text: "Parent Information Letter Template"
      },
      {
        type: "callout",
        text: "Dear Parents/Carers, We are excited to share that [School Name] is beginning to explore how Artificial Intelligence (AI) can support your child's learning. What is AI in our classroom? AI helps teachers create better learning materials. It's like a very advanced computer program that can write and create pictures. We use it to make lessons more interesting and suitable for different learners. Your child will NOT be using AI directly - only teachers use these tools. How we keep it safe: Teachers check everything AI creates before sharing with children. We follow strict government guidelines for AI in schools. No personal information about your child is used. We teach children to think critically about all information. How this helps your child: More personalized learning materials, Creative story ideas and writing prompts, Visual aids to explain difficult concepts, Extra practice questions at the right level. Your questions matter: Please contact us if you have any concerns about AI use in our school. Kind regards, [Head Teacher Name]"
      },
      {
        type: "heading",
        text: "Frequently Asked Questions for Parents"
      },
      {
        type: "list",
        items: [
          "Q: Is my child using AI directly? A: No. Only teachers use AI tools. Children see the results after teachers have checked them.",
          "Q: Is it safe? A: Yes. We follow government guidelines and never share your child's personal information with AI.",
          "Q: Will this replace teachers? A: Absolutely not. AI helps teachers be more effective, it doesn't replace human teaching.",
          "Q: How do you ensure accuracy? A: Teachers always verify AI-generated content before using it with students.",
          "Q: What about screen time? A: AI often creates printed materials or activities that don't require additional screen time.",
          "Q: Can I opt my child out? A: Yes, please discuss any concerns with your child's teacher or the head teacher."
        ]
      }
    ]
  },
  10: {
    title: "Assessment Strategies",
    content: [
      {
        type: "heading",
        text: "Authentic Assessment in the AI Era"
      },
      {
        type: "heading",
        text: "Process-Focused Assessment"
      },
      {
        type: "paragraph",
        text: "Instead of focusing only on final products, assess:"
      },
      {
        type: "list",
        items: [
          "Learning journey documentation - Photos, videos, reflections",
          "Thinking processes - How children approach problems",
          "Collaboration skills - Working together on AI-enhanced tasks",
          "Critical evaluation - Questioning and improving AI outputs"
        ]
      },
      {
        type: "heading",
        text: "Portfolio Approaches"
      },
      {
        type: "paragraph",
        text: "Learning Portfolios Should Include:"
      },
      {
        type: "list",
        items: [
          "Original work without AI support",
          "AI-enhanced work clearly labeled",
          "Reflection sheets - 'How did AI help me learn?'",
          "Peer feedback on both AI and non-AI work",
          "Self-assessment against learning objectives"
        ]
      },
      {
        type: "heading",
        text: "AI Literacy Assessment"
      },
      {
        type: "paragraph",
        text: "Key Skills to Evaluate:"
      },
      {
        type: "list",
        items: [
          "Recognition: Can students identify AI-generated content?",
          "Evaluation: Do they question AI outputs appropriately?",
          "Integration: How well do they combine AI help with their own ideas?",
          "Ethics: Do they understand appropriate AI use?"
        ]
      }
    ]
  },
  11: {
    title: "Professional Development Framework",
    content: [
      {
        type: "heading",
        text: "4-Phase Training Approach"
      },
      {
        type: "heading",
        text: "Phase 1: Awareness (Week 1-2)"
      },
      {
        type: "list",
        items: [
          "Objectives: Understanding AI capabilities and limitations",
          "Activities: Interactive AI demonstrations, Discussion of educational applications, Safety and ethics overview, Hands-on tool exploration",
          "Outcomes: Basic AI literacy and confidence"
        ]
      },
      {
        type: "heading",
        text: "Phase 2: Exploration (Week 3-6)"
      },
      {
        type: "list",
        items: [
          "Objectives: Hands-on tool experimentation",
          "Activities: Guided practice with selected AI tools, Creation of simple educational materials, Peer sharing and feedback sessions, Problem-solving common challenges",
          "Outcomes: Comfort with basic AI tool use"
        ]
      },
      {
        type: "heading",
        text: "Phase 3: Integration (Week 7-12)"
      },
      {
        type: "list",
        items: [
          "Objectives: Curriculum-aligned implementation",
          "Activities: Lesson planning with AI support, Classroom pilot projects, Student work analysis and adaptation, Cross-curricular application development",
          "Outcomes: Effective classroom integration"
        ]
      },
      {
        type: "heading",
        text: "Phase 4: Evaluation (Ongoing)"
      },
      {
        type: "list",
        items: [
          "Objectives: Impact assessment and refinement",
          "Activities: Data collection on student outcomes, Reflection on teaching practice changes, Sharing of best practices, Continuous improvement planning",
          "Outcomes: Sustained, effective AI use"
        ]
      }
    ]
  },
  12: {
    title: "Implementation Considerations",
    content: [
      {
        type: "heading",
        text: "Technical Requirements"
      },
      {
        type: "heading",
        text: "Infrastructure Needs"
      },
      {
        type: "list",
        items: [
          "Reliable Internet Connection - Minimum bandwidth for AI tools",
          "Device Access - Teacher laptops/tablets for AI tool use",
          "Network Security - Appropriate filtering and monitoring",
          "Cloud Storage - For AI-generated resources and materials"
        ]
      },
      {
        type: "heading",
        text: "Tool Evaluation Rubrics"
      },
      {
        type: "paragraph",
        text: "Use this framework to assess new AI tools:"
      },
      {
        type: "table",
        headers: ["Criteria", "Excellent (4)", "Good (3)", "Fair (2)", "Poor (1)"],
        rows: [
          ["Educational Value", "Directly supports curriculum objectives", "Relevant to learning goals", "Some educational benefit", "Limited educational purpose"],
          ["Safety & Compliance", "Full safeguarding compliance", "Mostly compliant with minor issues", "Some safety concerns", "Major safety risks"],
          ["Ease of Use", "Intuitive for all teachers", "Easy with minimal training", "Requires significant training", "Complex and difficult"],
          ["Integration", "Seamless with existing systems", "Works well with some adjustments", "Limited integration possible", "Poor integration"],
          ["Cost Effectiveness", "Excellent value for money", "Good value with clear benefits", "Reasonable cost", "Expensive with limited benefits"]
        ]
      }
    ]
  },
  13: {
    title: "Child Safety & Safeguarding",
    content: [
      {
        type: "heading",
        text: "Critical Safety Risks for Primary Schools"
      },
      {
        type: "paragraph",
        text: "Recent NSPCC research identifies 7 key safety risks with Gen AI for children:"
      },
      {
        type: "list",
        items: [
          "Sexual grooming - AI used to build relationships with children",
          "Sexual harassment - Generation of inappropriate content",
          "Bullying - AI-enhanced cyberbullying tactics",
          "Financial extortion - AI-generated threats and scams",
          "Child sexual abuse material - AI-generated inappropriate images",
          "Harmful content - Misinformation, dangerous advice",
          "Harmful ads and recommendations - Inappropriate targeting"
        ]
      },
      {
        type: "heading",
        text: "Age Verification & Supervision Requirements"
      },
      {
        type: "callout",
        text: "Critical Legal Point: Most AI tools (ChatGPT, Claude, DALL·E) have 18+ age restrictions. Primary schools must: Always use teacher accounts - Never allow direct student access, Maintain constant supervision when AI is used, Filter all outputs before sharing with students, Document usage for safeguarding records"
      },
      {
        type: "heading",
        text: "Safe Implementation Model"
      },
      {
        type: "callout",
        text: "Teacher uses AI → Reviews content → Adapts for class → Shares with students"
      },
      {
        type: "callout",
        text: "Never: Student uses AI directly → Shares with class"
      }
    ]
  },
  14: {
    title: "UK Policy & Legal Requirements",
    content: [
      {
        type: "heading",
        text: "Latest DfE Guidance (June 2025)"
      },
      {
        type: "paragraph",
        text: "The Department for Education has published comprehensive AI guidance requiring schools to:"
      },
      {
        type: "heading",
        text: "Mandatory Requirements"
      },
      {
        type: "list",
        items: [
          "AI Product Safety Expectations - Only use tools meeting DfE standards",
          "Child Protection - Follow updated KCSIE 2025 guidelines",
          "Data Protection - Comply with GDPR/DPA 2018",
          "Professional Oversight - Teachers responsible for all AI outputs"
        ]
      },
      {
        type: "heading",
        text: "Key Policy Points"
      },
      {
        type: "list",
        items: [
          "Teacher-led approach - AI supports, doesn't replace teaching",
          "Accuracy verification - All AI content must be checked",
          "Personal data protection - No student identifiable information in AI tools",
          "Age-appropriate use - Consider developmental needs"
        ]
      },
      {
        type: "heading",
        text: "Keeping Children Safe in Education 2025 Updates"
      },
      {
        type: "list",
        items: [
          "Generative AI safety expectations - Link to DfE product standards",
          "Online safety expansion - AI-generated misinformation as safeguarding harm",
          "Technology planning - Use DfE's 'plan technology for your school' service"
        ]
      }
    ]
  },
  15: {
    title: "Emergency Protocols",
    content: [
      {
        type: "heading",
        text: "Inappropriate Content Response"
      },
      {
        type: "heading",
        text: "Immediate Response (0-30 seconds)"
      },
      {
        type: "paragraph",
        text: "If AI generates inappropriate content:"
      },
      {
        type: "list",
        items: [
          "STOP - Don't show children, minimize screen immediately",
          "ALERT - Signal to teaching assistant if available",
          "REDIRECT - 'Let me try that again' or switch activities",
          "REASSURE - Keep calm demeanor for children"
        ]
      },
      {
        type: "callout",
        text: "Sample Teacher Response: 'Oh, that's not quite what we need. Let me ask the computer helper a different question while you discuss your ideas with your partner.'"
      },
      {
        type: "heading",
        text: "Documentation Process (Within 1 hour)"
      },
      {
        type: "paragraph",
        text: "Complete the following steps:"
      },
      {
        type: "list",
        items: [
          "Incident Form - Record details of inappropriate content",
          "Screenshot Evidence - If safe to do so, capture",
          "DSL Notification - Inform Designated Safeguarding Lead",
          "Parent Communication - If children were exposed",
          "Tool Review - Consider discontinuing use"
        ]
      }
    ]
  },
  16: {
    title: "Quick Reference",
    content: [
      {
        type: "heading",
        text: "Essential AI Implementation Checklist"
      },
      {
        type: "list",
        items: [
          "□ Complete AI maturity assessment",
          "□ Establish school-wide AI policy",
          "□ Train all staff on AI safety",
          "□ Select age-appropriate tools",
          "□ Create parent communication plan",
          "□ Develop safeguarding protocols",
          "□ Plan curriculum integration",
          "□ Set up assessment frameworks",
          "□ Establish emergency procedures",
          "□ Schedule ongoing professional development"
        ]
      },
      {
        type: "heading",
        text: "Key Contact Information"
      },
      {
        type: "list",
        items: [
          "Designated Safeguarding Lead (DSL): [School Contact]",
          "IT Support: [School Contact]",
          "AI Lead Teacher: [School Contact]",
          "DfE AI Guidance: www.gov.uk/guidance/ai-in-education",
          "UK Safer Internet Centre: www.saferinternet.org.uk"
        ]
      },
      {
        type: "heading",
        text: "Recommended Tools by Age Group"
      },
      {
        type: "list",
        items: [
          "EYFS: Teacher-only use - ChatGPT (supervised), DALL·E (pre-screened)",
          "KS1: Teacher-led - MagicSchool.ai, Canva AI (teacher-mediated)",
          "KS2: Guided exploration - Khanmigo, Claude (with supervision)",
          "All ages: Assessment tools - TeachFlow, Quizzizz AI features"
        ]
      }
    ]
  }
}

export default function SectionPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [sectionId, setSectionId] = useState(1)
  
  useEffect(() => {
    const id = parseInt(params.id as string)
    if (id >= 1 && id <= 16) {
      setSectionId(id)
    }
  }, [params.id])

  const section = sectionsData[sectionId as keyof typeof sectionsData]
  const prevId = sectionId > 1 ? sectionId - 1 : null
  const nextId = sectionId < 16 ? sectionId + 1 : null

  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const level = item.text.startsWith('##') ? 2 : item.text.startsWith('###') ? 3 : 1
          const cleanText = item.text.replace(/^#+\s*/, '')
          const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
          const headingClasses = level === 1 ? 'text-2xl font-bold text-slate-800 mt-8 mb-4' :
                               level === 2 ? 'text-xl font-semibold text-slate-800 mt-6 mb-3' :
                               'text-lg font-medium text-slate-800 mt-4 mb-2'
          return <HeadingTag key={index} className={headingClasses}>{cleanText}</HeadingTag>
        
        case 'paragraph':
          return <p key={index} className="text-slate-600 leading-relaxed mb-4">{item.text}</p>
        
        case 'list':
          return (
            <ul key={index} className="space-y-2 mb-4">
              {item.items.map((listItem: string, listIndex: number) => (
                <li key={listIndex} className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          )
        
        case 'callout':
          return (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          )
        
        case 'table':
          return (
            <div key={index} className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    {item.headers.map((header: string, headerIndex: number) => (
                      <th key={headerIndex} className="border border-slate-200 px-4 py-2 text-left text-slate-800 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row: string[], rowIndex: number) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td key={cellIndex} className="border border-slate-200 px-4 py-2 text-slate-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        
        default:
          return null
      }
    })
  }

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
          <h1 className="text-lg font-semibold text-slate-800 truncate px-4">
            {sectionId}. {section?.title}
          </h1>
          <Link href="/contents">
            <Button variant="outline" size="sm">
              Contents
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 py-8 page-transition">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 p-6 md:p-8">
          <div className="prose prose-slate max-w-none">
            {section && renderContent(section.content)}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between">
          {prevId ? (
            <Link href={`/section/${prevId}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextId ? (
            <Link href={`/section/${nextId}`}>
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/contents">
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                Back to Contents
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
            <span>Progress</span>
            <span>{sectionId} of 16 sections</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(sectionId / 16) * 100}%` }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  )
}