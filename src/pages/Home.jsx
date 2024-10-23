import headshot from '../assets/headshot.jpg';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Phillip Lam</h1>
      <div className="content">
        <img 
          src={headshot} 
          className="rounded-circle headshot" 
          alt="Headshot"
        />
        <div className="bio">
          <p>
            <i>Hey there! My name is Phillip!</i>
          </p>
          <p>I’m based in Melbourne, Victoria. I discovered web development after creating a Python game, and I instantly fell in love with it. In my free time, I enjoy staying active, reading, and playing competitive games. After completing this exciting course, the long term goal would be to break into the software-engineering world and bring my wildest ideas to life.</p>
        </div>
      </div>
    </div>
  );
}
