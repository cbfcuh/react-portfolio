import projects from '../projects';

export default function Portfolio() {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {projects.map((project, index) => (
          <div className="card m-3" style={{ width: '18rem' }} key={index}>
            <img className="card-img-top" src={project.img} alt={project.alt} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.info}</p>
              <a href={project.github} className="btn btn-secondary m-1">Go to GitHub</a>
              <a href={project.link} className="btn btn-secondary m-1">Visit Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}