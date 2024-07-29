
export default function ProjectCard(props) {
    // ISS Consumables, UCKG, portfolio assistant3
    return (
    <div className="flex flex-col justify-center items-left h-72 text-lavender-blush mb-5 rounded-md lg:mb-0 p-5 bg-cover lg:w-full" style={{backgroundImage:  `url(${props.image})`}}>
        <h1 className="mb-3 font-bold text-2xl">{props.title}</h1>
        <p className="mb-3 italic font-medium text-sm">{props.description}</p>
        <button className="w-8/12 p-2 px-5 mt-3 font-bold bg-saffron rounded-sm shadow-md hover:bg-navy-blue lg:w-1/3">View Code</button>
    </div>
  )
}
