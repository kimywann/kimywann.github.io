import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "김영완 - 이력서",
  description: "프론트엔드 개발자 김영완의 이력서입니다.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-sm">
        <Hero />
        <About />
        <Projects />
        <Education />
      </div>
    </main>
  );
}
