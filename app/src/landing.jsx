import imgUrl from './assets/react.svg';

export default function Landing() {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Visiualize Your Logbook Metrics</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Maximize your rowing performance with Logbook-Dashboard's easy-to-use platform, analyze your data, and track your progress to crush your personal records.</p>
          <img src={imgUrl} />
        </div>
      </div>
    </section>
  );
}
