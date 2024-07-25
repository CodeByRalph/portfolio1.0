export default function Contact() {
  return (
    <section id="contact" className="w-11/12 mx-auto my-10 p-5 lg:w-1/3">
      <h1 className="text-4xl mb-5 font-bold text-saffron">Let's Connect</h1>
      <p className="mb-5 font-light">
      If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 bg-lavender-blush border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-lavender-blush border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 bg-lavender-blush border-b-2 border-black focus:outline-none"
            placeholder="Hello, how are you!"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-saffron shadow-lg opacity-90 text-white font-bold py-2 rounded-lg lg:w-1/2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
