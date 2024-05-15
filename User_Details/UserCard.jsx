import PropTypes from "prop-types";
const UserData = [
    {
        name: "Adam", location:"California", desc:"A Front-end Developer", skills:["UI/UX","Front-end Developer","HTML","CSS","JavaScript","React"], online: true, profile:"images/img4.jpg",
    },
    {
        name: "Santos", location:"New York", desc:"Data Analyst", skills:["UI/UX","Problem Solving","HTML","Excel","Decision Making","Leadership"], online: false, profile:"images/img2.jpg",
    },
    {
        name: "Katie", location:"Melbourne", desc:"Manager", skills:["Accounting","Managing Skill","HTML","Designing","Employye Resource","HOD"], online: true, profile:"images/img3.jpg",
    },
    {
        name: "Katie", location:"Melbourne", desc:"Manager", skills:["Accounting","Managing Skill","HTML","Designing","Employye Resource","HOD"], online: true, profile:"images/img3.jpg",
    },
]
function User(props) {
    return (
        <div className="card-container">
            <span className={props.online ? "pro online": "pro offline"}>{props.online ?"ONLINE":"OFFLINE"} </span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.location}</h3>
            <p>{props.desc}</p>
            <div className="buttons">
                <button className="primary">Messege</button>
                <button className="primary out">Following</button>
            </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>{props.skills.map((skill, index)=>(
                <li key={index}>{skill}</li>
            ) ) } 
            </ul>
        </div>
        </div>
    );
};
export const UserCard = () => {
  return ( 
  <>
  { UserData.map((user, index)=>(
<User key={index} name={user.name} location={user.location}
desc={user.desc} online={user.online} profile={user.profile}
 skills={user.skills}
/>
  ))
  }
  </>
    );
};

{/* <User name="Adam" location="California" desc="A Front-end Developer" skills={["UI/UX","Front-end Developer","HTML","CSS","JavaScript","React"]} online={true} profile="images/img1.jpg" /> */}

User.propTypes= {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,

};