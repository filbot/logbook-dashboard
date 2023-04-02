export default function Landing() {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <section className="hero">
        <h1>Logbook Dashboard</h1>
        <p>Track your rows and improve your performance with our data dashboard.</p>
        <a href="#" className="cta">Learn More</a>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Track Your Progress</h2>
          <p>Our dashboard allows you to track your progress over time, so you can see your improvement with each row.</p>
        </div>
        <div className="feature">
          <h2>Set Goals</h2>
          <p>Set rowing goals for yourself and track your progress towards achieving them.</p>
        </div>
        <div className="feature">
          <h2>Compete With Others</h2>
          <p>Join our community and compete with other rowers to see who can row the furthest or the fastest.</p>
        </div>
      </section>

      <footer className="bg-black rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {year} <a href="https://filbot.com/" className="hover:underline">Filbot™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
