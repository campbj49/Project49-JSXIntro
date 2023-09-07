const Tweet = (props) =>{
    return(
        <div className = "tweet">
            <h1>{props.fullName}</h1>
            <h3>@{props.username}</h3>
            <h5>{props.date}</h5>
            <p>{props.message}</p>
        </div>
    )
};

const App = () =>{
    return(
        <div>
            <Tweet 
            fullName="User1 Lastname"
            username="user1"
            date="1/1/23"
            message="body of the message"
            />
            <Tweet 
            fullName="User2 Lastname"
            username="user2"
            date="2/2/23"
            message="body of the message"
            />
            <Tweet 
            fullName="User3 Lastname"
            username="user3"
            date="3/3/23"
            message="body of the message"
            />
        </div>
    )
}


  
ReactDOM.render(<App/>,
document.getElementById("root"));