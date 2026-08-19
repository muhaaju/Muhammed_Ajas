'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-gray-100 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg text-emerald-400">MUHAMMED AJAS</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-emerald-400 transition-colors">ABOUT</a>
            <span className="text-zinc-600">·</span>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">EXPERIENCE</a>
            <span className="text-zinc-600">·</span>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">PROJECTS</a>
            <span className="text-zinc-600">·</span>
            <a href="#publications" className="hover:text-emerald-400 transition-colors">THINKING</a>
            <span className="text-zinc-600">·</span>
            <a href="#beyond" className="hover:text-emerald-400 transition-colors">BEYOND</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-zinc-800 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors py-2"
              >
                ABOUT
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors py-2"
              >
                EXPERIENCE
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors py-2"
              >
                PROJECTS
              </a>
              <a 
                href="#publications" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors py-2"
              >
                THINKING
              </a>
              <a 
                href="#beyond" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors py-2"
              >
                BEYOND
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-emerald-500 text-zinc-950 rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/40 transition-all z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section with Profile Photo */}
        <header className="mb-32" id="about">
          <div className="grid md:grid-cols-12 gap-12 items-start mb-12">
            <div className="md:col-span-8">
              <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight text-white">
                Muhammed Ajas
              </h1>
              <p className="text-2xl md:text-3xl text-emerald-400 font-light mb-8 leading-relaxed">
                I build reliable systems, automate the difficult parts, and make production engineering better.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a <strong className="text-emerald-400">Senior Site Reliability Engineer and Cloud Architect</strong> working across cloud infrastructure, Kubernetes, automation, observability, security, and production reliability.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My work focuses on turning complex operational problems into reliable engineering solutions. When something repeatedly requires manual intervention, I look for a way to automate it. When a production failure is difficult to understand, I look for better diagnostics and better evidence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently at <strong className="text-emerald-400">IBM</strong>, building and improving infrastructure and operational capabilities for Cognos Analytics on Cloud—managing 300+ Kubernetes clusters serving 500+ enterprise customers.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 shadow-lg shadow-emerald-500/10">
                <Image 
                  src="/images/profile-main.jpg" 
                  alt="Muhammed Ajas" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* What I Do Section */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">WHAT I DO</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Site Reliability Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Improving the reliability, observability, maintainability, and recoverability of production systems.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Cloud Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing cloud infrastructure with a focus on security, reliability, maintainability, and operational simplicity.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Kubernetes</h3>
              <p className="text-gray-600 leading-relaxed">
                Working with Kubernetes platforms, workloads, networking, configuration, troubleshooting, Helm, and operational lifecycle management.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Turning repetitive operational activities into reliable workflows using Python, Bash, APIs, Kubernetes, and infrastructure tooling.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Production Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Investigating complex failures across application, infrastructure, database, networking, authentication, and platform layers.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Incident Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading technical investigations, coordinating recovery, communicating during incidents, and driving issues toward permanent remediation.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Platform Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Building internal tools and self-service capabilities that make infrastructure operations easier and more consistent.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-medium mb-3">Security Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Automating credentials, secrets, certificates, and security-related operational processes.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-32 py-16 border-y border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-light mb-4">300+</div>
              <div className="text-gray-600 leading-relaxed">
                Kubernetes clusters managed across multi-cloud environments
              </div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">500+</div>
              <div className="text-gray-600 leading-relaxed">
                Enterprise customers supported with production infrastructure
              </div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">$19K+</div>
              <div className="text-gray-600 leading-relaxed">
                Monthly cost savings through FinOps automation pipelines
              </div>
            </div>
          </div>
        </section>


        {/* Work Experience Section with Second Profile Photo */}
        <section className="mb-32" id="experience">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">WORK EXPERIENCE</h2>
          
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-16">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4 text-sm text-gray-500">
                  2022 — PRESENT
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-light mb-2">Senior Site Reliability Engineer</h3>
                  <div className="text-gray-600 mb-4">IBM India · Cognos Analytics on Cloud</div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Leading reliability engineering for Kubernetes infrastructure. Managing 300+ production clusters serving 500+ customers across multiple cloud platforms.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 italic">
                    The role combines hands-on engineering with operational ownership—understanding how systems behave in production and continuously improving how they are operated.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Designed RootCause Helper - automated forensic diagnostics platform cutting MTTR by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Architected Customer Self-Service Platform replacing manual onboarding for 500+ customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reduced monthly cloud costs by $19K through Kubernetes optimization and FinOps automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Served as Incident Commander for 10+ Sev-1 incidents and led disaster recovery operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Led and mentored team of 11 Site Reliability Engineers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4 text-sm text-gray-500">
                  2019 — 2022
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-light mb-2">Cloud Architect / Site Reliability Engineer</h3>
                  <div className="text-gray-600 mb-4">Tata Consultancy Services · Pfizer · Montevideo, Uruguay</div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Led cloud infrastructure discussions and migrated enterprise workloads from on-premises to AWS with zero downtime.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Designed secure AWS networking using VPC Peering, Transit Gateway, and Direct Connect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Implemented AWS IAM governance, GuardDuty monitoring, and Secrets Manager integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Built automation using AWS Lambda and Python for operational workflows</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4 text-sm text-gray-500">
                  2017 — 2019
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-light mb-2">Cloud Engineer</h3>
                  <div className="text-gray-600 mb-4">Tata Consultancy Services · Pfizer · Kochi, India</div>
                  <p className="text-gray-600 leading-relaxed">
                    Managed enterprise hybrid cloud operations including OS patching, backup, and infrastructure maintenance. Configured CloudWatch monitoring and proactive alerting.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4 text-sm text-gray-500">
                  2016 — 2017
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-light mb-2">System Engineer</h3>
                  <div className="text-gray-600 mb-4">Tata Consultancy Services · Gartner · Bengaluru, India</div>
                  <p className="text-gray-600 leading-relaxed">
                    Served as primary technical contact for global enterprise customers, resolving complex incidents while meeting SLA commitments using ITIL best practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200">
                <Image 
                  src="/images/profile-alt.jpg" 
                  alt="Muhammed Ajas - Professional" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32" id="projects">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">PROJECTS</h2>
          
          <div className="space-y-12">
            <div className="border-t border-gray-200 pt-12">
              <div className="mb-4 text-xs tracking-wider text-gray-500">
                AUTOMATION / DIAGNOSTICS / SRE
              </div>
              <h3 className="text-3xl font-light mb-6">RootCause Helper</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <em>When production fails, the evidence should already be there.</em>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                An automated forensic diagnostics platform that preserves application, Kubernetes, database, infrastructure, and network logs before pod or node recovery—supporting approximately 15 production incidents per month and materially cutting Mean Time to Recovery (MTTR) by 40%.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The platform automatically gathers and preserves important diagnostic information before recovery actions remove valuable evidence. Traditional troubleshooting often starts with "Let's see what logs we still have." RootCause Helper changes that to: "The evidence has already been collected. Now let's understand what it tells us."
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Kubernetes APIs</span>
                <span className="px-3 py-1 bg-gray-100 rounded">REST Services</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Automation</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="mb-4 text-xs tracking-wider text-gray-500">
                PLATFORM ENGINEERING / SELF-SERVICE / AUTOMATION
              </div>
              <h3 className="text-3xl font-light mb-6">Customer Self-Service Platform</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <em>Turning operational requests into engineering workflows.</em>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Flask-based platform that replaced manual email-driven onboarding by automating SSL uploads, custom URLs, SMTP configuration, contact management, and controlled cluster restarts for 500+ enterprise customers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Instead of engineers manually processing similar requests repeatedly, the platform provides a structured workflow for common operational activities. This improves consistency, reduces manual configuration errors, and makes routine environment management easier to execute.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Flask</span>
                <span className="px-3 py-1 bg-gray-100 rounded">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Kubernetes</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="mb-4 text-xs tracking-wider text-gray-500">
                FINOPS / COST OPTIMIZATION / AUTOMATION
              </div>
              <h3 className="text-3xl font-light mb-6">FinOps Automation Pipeline</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Automated cost optimization pipeline through Kubernetes resource right-sizing, CPU/memory optimization, automated orphaned-storage cleanup, and improved cluster decommission workflows, achieving $19K+ monthly savings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The goal was not simply to reduce resource consumption—it was to make resource efficiency part of normal engineering operations.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Kubernetes</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Cloud Cost Management</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Automation</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="mb-4 text-xs tracking-wider text-gray-500">
                SECURITY / COMPLIANCE / AUTOMATION
              </div>
              <h3 className="text-3xl font-light mb-6">Enterprise Security Automation</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Automated enterprise security and certificate compliance using HashiCorp Vault APIs for password rotation, audit automation, legacy-credential detection, and full SSL/Kubernetes Secret lifecycle management, preventing certificate-expiration incidents.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Security controls should have an operational lifecycle just like application infrastructure does.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded">HashiCorp Vault</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Kubernetes Secrets</span>
                <span className="px-3 py-1 bg-gray-100 rounded">SSL/TLS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Toolbox Section */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">ENGINEERING TOOLBOX</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-medium mb-4 text-gray-900">Cloud Platforms</h4>
              <ul className="space-y-2 text-gray-600">
                <li>AWS (EKS, EC2, Lambda, IAM)</li>
                <li>IBM Cloud</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-gray-900">Container & Orchestration</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Kubernetes</li>
                <li>Docker & Podman</li>
                <li>Helm</li>
                <li>Container Security</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-gray-900">IaC & Automation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Terraform</li>
                <li>Ansible</li>
                <li>Jenkins & GitHub Actions</li>
                <li>Python & Bash</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-gray-900">Observability</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Instana</li>
                <li>Sysdig</li>
                <li>IBM Cloud Logs</li>
                <li>AWS CloudWatch & Splunk</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-gray-900">Security & Compliance</h4>
              <ul className="space-y-2 text-gray-600">
                <li>HashiCorp Vault</li>
                <li>AWS Secrets Manager</li>
                <li>IAM & GuardDuty</li>
                <li>SSL/TLS Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-gray-900">SRE & Operations</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Incident Management</li>
                <li>Disaster Recovery</li>
                <li>PagerDuty & ServiceNow</li>
                <li>ITIL Best Practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-32" id="certifications">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">CERTIFICATIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">AWS Certified Solutions Architect</h3>
                  <div className="text-sm text-gray-500">Amazon Web Services · Professional Level</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced certification demonstrating expertise in designing distributed systems on AWS.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">AWS Certified Solutions Architect</h3>
                  <div className="text-sm text-gray-500">Amazon Web Services · Associate Level</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Foundational certification in AWS architecture and best practices.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">ITIL Foundation</h3>
                  <div className="text-sm text-gray-500">AXELOS · Certified</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Certification in IT service management best practices and frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Community Section with Inline Photo */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">COMMUNITY</h2>
          
          <div className="grid md:grid-cols-12 gap-12 mb-8">
            <div className="md:col-span-8 space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-medium mb-3">Progressive Techies Kerala</h3>
                <p className="text-gray-600 leading-relaxed">
                  Core group member delivering technical sessions on Kubernetes, SRE, Cloud Automation, and DevOps best practices for engineering teams and technical communities. I enjoy sharing practical engineering experiences and turning lessons from production into discussions that other engineers can learn from.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-medium mb-3">DevOps Malayalam Tech Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Active moderator fostering technical discussions and knowledge sharing in the regional DevOps community.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-medium mb-3">NGO Career Guidance Program</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mentor providing career guidance and technical mentorship to aspiring engineers. I enjoy helping early-career engineers understand how to move from learning technology to building practical engineering skills.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-medium mb-3">Panayikulam Public Library</h3>
                <p className="text-gray-600 leading-relaxed">
                  Secretary supporting community education and literacy initiatives.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-medium mb-3">Toastmasters Club</h3>
                <p className="text-gray-600 leading-relaxed">
                  Active member developing public speaking and leadership skills. Engineering is only part of the job—being able to explain an idea clearly and communicate during difficult situations is equally important.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200">
                <Image 
                  src="/images/community-collage.jpg" 
                  alt="Community Leadership Activities" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Writing & Ideas Section */}
        <section className="mb-32" id="publications">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">WRITING & IDEAS</h2>
          
          <div className="border-t border-gray-200 pt-12">
            <div className="mb-4 text-xs tracking-wider text-gray-500">
              SITE RELIABILITY ENGINEERING / AI / AUTOMATION
            </div>
            <a 
              href="https://github.com/muhaaju/ai-sre-agentic-reliability/wiki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-6 group-hover:text-gray-600 transition-colors">
                Site Reliability Engineering: From Deterministic Automation to Agentic Reliability Systems
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <em>What happens when infrastructure automation moves beyond rules?</em>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Exploring the evolution of infrastructure management from static, rule-based automation pipelines to dynamic, AI-driven agentic reliability models. The idea isn't to remove engineers from the loop—it's to build systems that can handle more of the repetitive investigation and operational reasoning, allowing engineers to focus on decisions that require experience, judgment, and accountability.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                <span>Read Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </section>

        {/* Engineering Philosophy Section */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-16">ENGINEERING PHILOSOPHY</h2>
          
          <div className="space-y-12">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Reliability is engineered, not monitored into existence.</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitoring can tell you that something is wrong. Reliability engineering asks: Why did it happen? How do we recover safely? How do we prevent it from happening again?
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Automate the operational knowledge.</h3>
              <p className="text-gray-600 leading-relaxed">
                If engineers repeatedly perform the same investigation, recovery process, or configuration task, there is an opportunity to turn that knowledge into software.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Preserve evidence.</h3>
              <p className="text-gray-600 leading-relaxed">
                A recovery that destroys the evidence needed for diagnosis can make the next failure harder to understand. Good operational systems should make investigation easier, not harder.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Make complexity understandable.</h3>
              <p className="text-gray-600 leading-relaxed">
                Infrastructure can become complicated very quickly. Good engineering is not only about building sophisticated systems—it is also about creating the tools, documentation, automation, and observability that allow humans to understand those systems.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Automate with purpose.</h3>
              <p className="text-gray-600 leading-relaxed">
                Automation isn't about removing humans from every process. It is about removing repetitive work so engineers can spend their time on problems that actually require engineering judgment.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4">Keep learning.</h3>
              <p className="text-gray-600 leading-relaxed">
                Cloud platforms evolve. Kubernetes evolves. Automation evolves. AI is changing how we think about infrastructure operations. The tools will change. The willingness to learn should not.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond the Screen Section with Photo Collages */}
        <section className="mb-32" id="beyond">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-8">BEYOND THE SCREEN</h2>
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-600 mb-8 italic border-l-2 border-gray-300 pl-8">
            "There is more to me than technology."
          </blockquote>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-16">
            Engineering is a big part of my life, but curiosity doesn't stop when I close my laptop. I enjoy travelling, discovering unfamiliar places, challenging myself with new experiences, playing sports, and exploring creative expression. Many of the things I enjoy outside technology have something in common with engineering: <strong>curiosity, preparation, adaptability, persistence, and the willingness to try something new.</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-t border-gray-200 pt-6">
              <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 border border-gray-200">
                <Image 
                  src="/images/travel-collage.jpg" 
                  alt="World Travel Experiences" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-3">World Traveller</h4>
              <p className="text-gray-600 leading-relaxed">
                Exploring diverse landscapes and cultures across the globe. For me, travelling isn't simply about visiting destinations—it's about experiencing different cultures, meeting people, and seeing the world from a different point of view.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 border border-gray-200">
                <Image 
                  src="/images/adventure-collage.jpg" 
                  alt="Adventure Sports Activities" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-3">Adventure Sports</h4>
              <p className="text-gray-600 leading-relaxed">
                Pushing boundaries through high-adrenaline outdoor pursuits including skydiving, river rafting, kayaking, and mountaineering. I learned to swim at age 30 and later challenged myself to cross the Periyar river. Being a beginner can be uncomfortable—it can also be one of the most rewarding places to be.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 border border-gray-200">
                <Image 
                  src="/images/sports-collage.jpg" 
                  alt="Sports and Interests" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-3">Sports & Creative Expression</h4>
              <p className="text-gray-600 leading-relaxed">
                Competitive badminton player, Valasery Kayaking Club member, and exploring creative expression through acting and public speaking. There is something surprisingly similar between engineering and communication: take something complicated, understand it deeply, then make it simple for someone else.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-8">LET'S CONNECT</h2>
          
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Interested in discussing SRE practices, cloud architecture, Kubernetes, platform engineering, infrastructure automation, or AI & agentic reliability? Whether you're working through a difficult production problem or simply want to exchange engineering perspectives, I'd be happy to connect.
            </p>
            
            <form action="https://formspree.io/f/mbgrppwl" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>

        {/* Find Me Online Section */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 mb-8">FIND ME ONLINE</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://www.linkedin.com/in/muhammedajas-753346109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-t border-gray-200 pt-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">LinkedIn</h3>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                linkedin.com/in/profileofajas
              </p>
            </a>

            <a 
              href="https://github.com/muhaaju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-t border-gray-200 pt-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">GitHub</h3>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                github.com/muhaaju
              </p>
            </a>

            <a 
              href="https://www.instagram.com/muhammed_ajas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-t border-gray-200 pt-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">Instagram</h3>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                instagram.com/muhammed_ajas
              </p>
            </a>

            <a 
              href="mailto:ajas.muhammed1@gmail.com"
              className="group border-t border-gray-200 pt-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">Email</h3>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ajas.muhammed1@gmail.com
              </p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-200 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="mb-2">© 2026 Muhammed Ajas</p>
              <p className="text-xs">Senior Site Reliability Engineer & Cloud Architect</p>
              <p className="text-xs italic mt-2">Building reliable systems. Automating the repetitive. Exploring beyond the screen.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>System Status: Online</span>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
