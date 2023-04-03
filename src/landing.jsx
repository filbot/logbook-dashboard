export default function Landing() {
  return (
    <section className="text-gray-400 body-font grow">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Visiualize Your Logbook Metrics</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Maximize your rowing performance with Logbook-Dashboard's easy-to-use platform, analyze your data, and track your progress to crush your personal records.</p>
        </div>
      </div>
      <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" onClick={() => {
          auth.signin(() => navigate("/dashboard"));
        }}>Authenticate
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
    </section>
  );
}
