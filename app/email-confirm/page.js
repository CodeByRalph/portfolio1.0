import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <main className="w-full h-svh px-6 bg-navy-blue flex flex-col justify-center text-lavender-blush text-center">
        
        <div>
            <h1 className='animate-appear [--appear-delay:500ms] opacity-0 text-3xl'>Message Sent</h1>
            <p className='animate-appear [--appear-delay:700ms] opacity-0 mt-3'>Thank you for getting in touch! I will get back to you as soon as possible!</p>
        </div>
        <button className='animate-appear [--appear-delay:800ms] opacity-0 w-1/2 mt-24 mx-auto bg-saffron rounded-md shadow-lg text-lavender-blush text-lg font-bold p-2'>
            <Link href="/">
                <h1>Back to Home</h1>
            </Link>
        </button>
    </main>
  )
}
