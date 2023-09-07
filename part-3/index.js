const Person = (props)=>{
    return(
        <div className = "person">
            <p>Learn some information about this person.</p>
            <p>Name: {props.name.length>=8 ? props.name.slice(0,6) : props.name}</p>
            <p>Age: {props.age}</p>
            <h3>{props.age>=18 ? "Go Vote" : "You must be 18"}</h3>
            <ul>
            { props.hobbies.map(h => <li>{h}</li>) }
            </ul>
        </div>
    )
}

const App = () =>{
    return(
        <div>
            <Person 
            name="Rumplestiltzkin"
            age = "10"
            hobbies={[]}
            />
            <Person 
            name="Short"
            age="20"
            hobbies={["one"]}
            />
            <Person 
            name="User3Lastname"
            age="5"
            hobbies={["this", "person","has","several","hobbies"]}
            />
        </div>
    )
}


  
ReactDOM.render(<App/>,
document.getElementById("root"));