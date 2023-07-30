import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Here is a little bit of info about me.
        </p>

        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">Links</h2>
          <ul>
            <li>
              GitHub: <a className="text-blue-500" href="https://github.com/joeharwood96">@joeharwood96</a>
            </li>
            <li>
              Website: <a className="text-blue-500" href="https://joeharwood.me">https://joeharwood.me</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a className="text-blue-500" href="https://www.linkedin.com/in/josephharwood-3/">
              https://www.linkedin.com/in/josephharwood-3
              </a>
            </li>
            <li>
              Instagram: <a className="text-blue-500" href="https://www.instagram.com/_joe.harwood">@_joe.harwood</a>
            </li>
          </ul>
          <h2 className="font-bold text-xl md:text-3xl tracking-tight my-4 text-black dark:text-white">Bio</h2>
          <h2 className="font-bold text-lg md:text-xl tracking-tight mb-4 text-black dark:text-white">Job Title</h2>
          <p>Front End Software Engineer II at{' '}<span className="font-semibold">Booking.com</span></p>
          <h2 className="font-bold text-lg md:text-xl tracking-tight my-4 text-black dark:text-white">Education</h2>
          <p>B.S. in Software Engineering from Manchester Metropolitan University</p>
      </div>
    </Layout>
  );
}