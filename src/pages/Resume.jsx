import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Example for icons

export default function Resume() {
  return (
    <div className="container">
      <div className="text-center my-5">
        <a className="btn btn-primary btn-lg" href="..\src\assets\EmptyResumeFile.pdf" download="EmptyResumeFile.pdf">
          Download My Resume
        </a>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="p-3 text-center">Front End Skills</h2>
          <ul className="list-group">
            <li className="list-group-item"><FaHtml5 className="me-2" />HTML</li>
            <li className="list-group-item"><FaCss3Alt className="me-2" />CSS</li>
            <li className="list-group-item"><FaJs className="me-2" />JavaScript</li>
            <li className="list-group-item"><FaReact className="me-2" />React</li>
            <li className="list-group-item">JQuery</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Tailwind</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="p-3 text-center">Back End Skills</h2>
          <ul className="list-group">
            <li className="list-group-item"><FaNodeJs className="me-2" />Node.js</li>
            <li className="list-group-item"><FaDatabase className="me-2" />MongoDB</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">MERN Stack</li>
            <li className="list-group-item">GraphQL</li>
            <li className="list-group-item">NoSQL</li>
            <li className="list-group-item">MVC Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
