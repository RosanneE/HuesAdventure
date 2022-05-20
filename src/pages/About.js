
const About = () => {

    return (
        <div className="main">
            <h1>About</h1>
            <div className="intro">
                <p>Hues Your Own Adventure is an interactive react app Created by Rosanne Anderson, a software engineer based in Baltimore MD. For more information or to connect, visit the links below.</p>   
            </div>
            <div>
                <img className ="pic"src={"https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/166390149_10100478739544441_3178467484712097076_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=JHC2VoxSUNMAX9bF5oe&tn=zdKlWtRNEHct-tqK&_nc_ht=scontent-iad3-1.xx&oh=00_AT9ACLT-16N5HnrRw6KO0XVi_iFaHnzwPpMSFwqDYw_tSQ&oe=62AB8F72"} alt = "Picture of Rosanne"></img>
            </div>
            <div>
            <a className= "aboutLink" href="https://www.linkedin.com/in/rosanne-anderson" alt = "LinkedIn"><h3>LinkedIn</h3></a>
            <a className= "aboutLink" href="https://github.com/RosanneE" alt = "Github"><h3>Github</h3></a>
            </div>
        </div>
    )
}

//export
export default About 