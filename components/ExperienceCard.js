
export default function ExperienceCard(props) {
  return (
    <div className="w-5/6 my-5 mb-8 relative lg:border-b-2 lg:p-5 lg:pb-10 lg:w-1/2">
        <h1 className="text-lavender-blush text-2xl font-bold lg:text-4xl">{props.position}</h1>
        <h1 className="text-saffron text-lg lg:text-2xl">@{props.company}</h1>
        <h1 className="text-lavender-blush font-light py-3 opacity-80 lg:text-lg">{props.date}</h1>
        <p className="text-lavender-blush opacity-80 font-light lg:text-lg">
        As a Headstarter Software Engineering Fellow, I embarked on a rigorous program designed to elevate my technical skills and professional development. Over the course of the fellowship, I successfully built five AI projects, each focusing on a different aspect of artificial intelligence. My final project achieved notable traction by securing 1000 people on a waitlist, 1000 account creations, or generating $1000 in revenue.
        </p>
    </div>
  )
}
