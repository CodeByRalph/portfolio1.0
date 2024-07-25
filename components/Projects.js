import ProjectCard from "./ProjectCard"
import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <h1 className="text-3xl text-saffron m-5 text-center lg:text-5xl">Projects</h1>
      <div className="w-3/4 m-auto flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-5 lg:mb-10">
        <Link href="https://github.com/edogdu/UCKG"><ProjectCard image={'UCKG.png'} title='UCKG' description='A unified cybersecurity knowledge graph to be used in intelligent cyber operations' /></Link>
        <Link href="https://github.com/CodeByRalph/ISS_Consumable_Usage"><ProjectCard image={'ISS.png'} title='ISS Consumables Prediction' description='ML program to predict consumable needs for the next resupply mission. ' /></Link>
        <Link href="https://github.com/CodeByRalph/portfolio-assistant"><ProjectCard image={'Assistant.png'} title='Portfolio Assistant' description='AI Portfolio Assistant using RAG for Recruiter Q&A' /></Link>
        <Link href="https://github.com/CodeByRalph/BaccaratGame"><ProjectCard image={'baccarat.png'} title='Baccarat Card Game' description='Casino style baccarat game' /></Link>
      </div>
    </section>
  )
}
