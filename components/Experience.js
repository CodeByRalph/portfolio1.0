import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  return (
    <section id="experience" className="bg-navy-blue w-full flex flex-col items-center">
      <h1 className="text-lavender-blush text-3xl my-4 lg:text-5xl lg:my-9">Experience</h1>
      <ExperienceCard position='Software Engineer Fellow' company='Headstarter AI' date='July 2024 - Current'/>
    </section>
  )
}
