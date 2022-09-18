/*
We have a bin of robot parts in a factory. Each part goes to a robot with a specific, unique name. Each part will be described by a string, with the name of the robot and the part name separated by an underscore, like "Rocket_arm".

All robots are made of the same types of parts, and we have a string of all of the parts required to form a complete robot. Given a list of available parts, return the collection of robot names for which we can build at least one complete robot.

Sample Input:

all_parts = [
    "Rocket_claw",
    "Rocket_sensors", 
    "Dustie_case", 
    "Rust_sensors",
    "Bolt_sensors",
    "Rocket_case",
    "Rust_case",
    "Bolt_speaker",
    "Rocket_wheels",
    "Rocket_speaker",
    "Dustie_case",
    "Dustie_arms",
    "Rust_claw",
    "Dustie_case",
    "Dustie_speaker",
    "Bolt_case",
    "Bolt_wheels",
    "Rust_legs",
    "Bolt_sensors" ]

required_parts_1 = "sensors,case,speaker,wheels"
required_parts_2 = "sensors,case,speaker,wheels,claw"

Expected Output (output can be in any order):

get_robots(all_parts, required_parts_1) => ["Rocket"]
get_robots(all_parts, required_parts_2) => ["Bolt", "Rocket"]

N: Number of elements in `all_parts`
P: Number of elements in `required_parts`
*/

var requiredParts1 = "sensors,case,speaker,wheels";
var requiredParts2 = "sensors,case,speaker,wheels,claw";

var allParts = [ 
    "Rocket_claw",
    "Rocket_sensors", 
    "Dustie_case", 
    "Rust_sensors",
    "Bolt_sensors",
    "Rocket_case",
    "Rust_case",
    "Bolt_speaker",
    "Rocket_wheels",
    "Rocket_speaker",
    "Dustie_case",
    "Dustie_arms",
    "Rust_claw",
    "Dustie_case",
    "Dustie_speaker",
    "Bolt_case",
    "Bolt_wheels",
    "Rust_legs",
    "Bolt_sensors"
];

let robots = {}

function partMatcher(allParts, requiredParts) {
  
    for (let i = 0; i < allParts.length; i++) {
        const [name, part] = allParts[i].split('_')
        // bracket notation is used to access value by variable
        if (typeof robots[name] === 'undefined') {
            robots[name] = {}
        }
        robots[name][part] = true
    }

    const parts = requiredParts.split(',')

    return Object.keys(robots).reduce((output, name) => {
        let robotParts = Object.keys(robots[name])
        let hasParts = true
        
        for (let i = 0; i < robotParts.length; i++) {
            if (!parts.includes(robotParts[i])) {
                hasParts = false
                break
            }
        }
        if (hasParts) {
            output.push(name)
        }
        return output
    }, [])
}

function PartMatcher() {

    let input1 = requiredParts1.split(',')
    let input2 = requiredParts2.split(',')

    return (
        <>
            <div className="flex-container">

                <div className='flex-item'>
                    <h2>All Parts</h2>
                    {allParts.map((x, index) => {
                        return <span key={index}><br/>{x}</span>
                    })}
                </div>

                <div className='flex-item'>
                    <h2>All Robots</h2>
                    {Object.keys(robots).map((x, index) => {
                        return <div>
                                <span key={index}>{x}</span>
                            </div>
                    })}
                </div>

                <div className='flex-item'>
                        <h2>Required Parts 1</h2>
                        {input1.map((x, index) => {
                            return <span key={index}><br/>{x}</span>
                        })}
                </div>
            </div>

            <div className="flex-container">

                <div className='flex-item'>
                    <h2>Required Parts 2</h2>
                    {input2.map((x, index) => {
                        return <span key={index}><br/>{x}</span>
                    })}
                </div>

                <div className='flex-item'>
                    <h2>Buildable Robots 1</h2>
                    {partMatcher(allParts, requiredParts1).map((x, index) => {
                        return <span key={index}><br/>{x}</span>
                    })}
                </div>

                <div className='flex-item'>
                    <h2>Buildable Robots 2</h2>
                    {partMatcher(allParts, requiredParts2).map((x, index) => {
                        return <span key={index}><br/>{x}</span>
                    })}
                </div>
            </div>
        </>
        
    )
}

export default PartMatcher;
