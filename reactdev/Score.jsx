// if no goal

function MissedGoal(){
    return <h1>MISSED!</h1>
}

// if goal

function MadeGoal(){
    return <h1>GOALLLLL!!!!</h1>
}

// mail score

function Goal(props){
    const isGoal = props.isGoal;
    if (isGoal){
        return <MadeGoal />
    } 
    else {
    return <MissedGoal />
    }
}

const root = reactDOM.createRoot(document.getElementById('root'))
root.render(<Goal isGoal={true} />)

// using ternary operator in place of if-else - 
// function Goal (props){
//     const isGoal = props.isGoal;
//     return(
//     <>
//         {isGoal ? <MadeGoal /> : <MissedGoal />}
//     </>    
//     )
// }

// const root = reactDOM.createRoot(document.getElementById('root'))
// root.render(<Goal isGoal={true} />)