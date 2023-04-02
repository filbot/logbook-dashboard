export default function Landing() {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <section className="hero">
        <h1>ERGData Dashboard</h1>
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

      <footer>
        <p>&copy; {year} Filbot. All rights reserved.</p>
      </footer>
    </>
  );
}
