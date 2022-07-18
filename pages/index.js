import Layout from "../components/layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"



const Index = () => (
    <Layout>
        {/**Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-light">
                    <div className="row">
                        <div className="col md-4">
                            <img src="Portfolio.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Alexis Ariel López Vilchis</h1>
                            <h3>Electric Electronic Engineer</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae delectus doloribus,
                                animi, laudantium eius cum explicabo quia debitis iure et dolorum ex,
                                adipisci neque laboriosam! Eveniet placeat pariatur officia distinctio.</p>
                            <a href="/hireme">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/**Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            {
                                experiences.map(({ title, from, to, description }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences">
                            <a className="btn btn-light">Know More</a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        {/**Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text light">Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href="/">
                                                <a>Know More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/">
                            <a className="btn btn-outline-light text-dark">More projects</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
)

export default Index;