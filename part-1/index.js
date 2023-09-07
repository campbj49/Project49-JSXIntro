function FirstComponent() {
    return <h1>My very first component</h1>
}

function NamedComponent() {
    return <p>My name is <i>name</i></p>
}

function App(){
    return(
        <div>
            <FirstComponent/>
            <NamedComponent/>
        </div>
    )
}
  
  ReactDOM.render(<App/>,
    document.getElementById("root"));