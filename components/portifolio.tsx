/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OjjhYnyepoB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Portifolio() {
  const [isPortuguese, setIsPortuguese] = useState(true);
  const toggleLanguage = () => {
    setIsPortuguese((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <LaptopIcon className="h-6 w-6" />
          <span className="sr-only">
            {isPortuguese
              ? "Portf\u00F3lio de Felipe de Sousa"
              : "Felipe de Sousa's Portfolio"}
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {isPortuguese ? "In\u00EDcio" : "Home"}
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {isPortuguese ? "Projetos" : "Projects"}
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {isPortuguese ? "Habilidades" : "Skills"}
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {isPortuguese ? "Contato" : "Contact"}
          </Link>
        </nav>
        <Button variant="outline" onClick={toggleLanguage} className="ml-4">
          {isPortuguese ? "English" : "Portugu\u00EAs"}
        </Button>
      </header>
      <main className="flex-1">
        <section id="introduction" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid md:gap-96 gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] max-w-fit mx-auto space-y-8 lg:space-y-0">
              <div className="flex flex-col justify-center items-center space-y-4 ">
                <div className="space-y-2 max-w-[600px] text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {isPortuguese ? "Felipe de Sousa" : "Felipe de Sousa"}
                  </h1>
                  <h2 className="text-xl font-semibold text-muted-foreground">
                    {isPortuguese
                      ? "Desenvolvedor Full-Stack"
                      : "Full-Stack Developer"}
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {isPortuguese
                      ? "Sou um desenvolvedor full-stack apaixonado, com expertise em construir aplica\u00E7\u00F5es web modernas, escal\u00E1veis e amig\u00E1veis ao usu\u00E1rio. Adoro criar solu\u00E7\u00F5es inovadoras que resolvem problemas do mundo real."
                      : "I'm a passionate full-stack developer with expertise in building modern, scalable, and user-friendly web applications. I love to create innovative solutions that solve real-world problems."}
                  </p>
                </div>
              </div>
              <img
                src="/next.svg"
                width="550"
                height="550"
                alt={"profile"}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {isPortuguese ? "Projetos Destacados" : "Featured Projects"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isPortuguese
                    ? "Confira alguns dos meus projetos recentes que mostram minhas habilidades de desenvolvimento full-stack."
                    : "Check out some of my recent projects that showcase my full-stack development skills."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt={isPortuguese ? "Projeto 1" : "Project 1"}
                      className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        {isPortuguese ? "Projeto 1" : "Project 1"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isPortuguese
                          ? "Uma aplica\u00E7\u00E3o web full-stack que permite aos usu\u00E1rios gerenciar suas tarefas e projetos."
                          : "A full-stack web application that allows users to manage their tasks and projects."}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        {isPortuguese ? "Demo ao Vivo" : "Live Demo"}
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt={isPortuguese ? "Projeto 2" : "Project 2"}
                      className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        {isPortuguese ? "Projeto 2" : "Project 2"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isPortuguese
                          ? "Um site de com\u00E9rcio eletr\u00F4nico responsivo com uma interface de usu\u00E1rio moderna e intuitiva."
                          : "A responsive e-commerce website with a modern and intuitive user interface."}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        {isPortuguese ? "Demo ao Vivo" : "Live Demo"}
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt={isPortuguese ? "Projeto 3" : "Project 3"}
                      className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        {isPortuguese ? "Projeto 3" : "Project 3"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isPortuguese
                          ? "Uma aplica\u00E7\u00E3o de bate-papo em tempo real com recursos como indicadores de digita\u00E7\u00E3o, confirma\u00E7\u00E3o de leitura e compartilhamento de arquivos."
                          : "A real-time chat application with features like typing indicators, read receipts, and file sharing."}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        {isPortuguese ? "Demo ao Vivo" : "Live Demo"}
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {isPortuguese ? "Minhas Habilidades" : "My Skills"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isPortuguese
                    ? "Tenho um conjunto diversificado de habilidades que me permitem construir aplica\u00E7\u00F5es web de alta qualidade, escal\u00E1veis e amig\u00E1veis ao usu\u00E1rio."
                    : "I have a diverse set of skills that allow me to build high-quality, scalable, and user-friendly web applications."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 pt-4">
                    <CodeIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold ">
                      {isPortuguese ? "Frontend" : "Frontend"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {isPortuguese
                      ? "Proficiente em HTML, CSS, JavaScript, React e outros frameworks e bibliotecas front-end modernas."
                      : "Proficient in HTML, CSS, JavaScript, React, and others modern front-end frameworks and libraries."}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Angular</Badge>
                    <Badge>Vue</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 pt-4">
                    <DatabaseIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">
                      {isPortuguese ? "Backend" : "Backend"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {isPortuguese
                      ? "Experiente em construir aplica\u00E7\u00F5es de servidor escal\u00E1veis e seguras usando Java, Python, Node.js e diversos frameworks em conjunto com bancos de dados SQL e NoSQL."
                      : "Experienced in building scalable and secure server-side applications using Java, Python, Node.js and various frameworks in addition of databases SQL and NoSQL."}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Java</Badge>
                    <Badge>Python</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>C++</Badge>
                    <Badge>C</Badge>
                    <Badge>Spring Framework</Badge>
                    <Badge>Django</Badge>
                    <Badge>Nest.js</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Prisma</Badge>
                    <Badge>PL/SQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 pt-4">
                    <PenToolIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">
                      {isPortuguese ? "Ferramentas" : "Tools"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {isPortuguese
                      ? "Proficiente no uso de diversas ferramentas e tecnologias para agilizar o processo de desenvolvimento e garantir c\u00F3digo de alta qualidade."
                      : "Proficient in using various tools and technologies to streamline the development process and ensure high-quality code."}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Scrum</Badge>
                    <Badge>Kanban</Badge>
                    <Badge>XP</Badge>
                    <Badge>TDD</Badge>
                    <Badge>JUnit</Badge>
                    <Badge>Jest</Badge>
                    <Badge>SonarQube</Badge>
                    <Badge>Cypress</Badge>
                    <Badge>Selenium</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {isPortuguese ? "Entre em Contato" : "Get in Touch"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isPortuguese
                    ? "Tem um projeto em mente ou apenas quer dizer um oi? Preencha o formul\u00E1rio abaixo e entrarei em contato com voc\u00EA o assim que poss\u00EDvel."
                    : "Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as\n                  soon as possible."}
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder={isPortuguese ? "Nome" : "Name"}
                    className="max-w-lg flex-1"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="max-w-lg flex-1"
                  />
                  <Textarea
                    placeholder={isPortuguese ? "Mensagem" : "Message"}
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">
                    {isPortuguese ? "Enviar" : "Submit"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function LaptopIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function PenToolIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}
