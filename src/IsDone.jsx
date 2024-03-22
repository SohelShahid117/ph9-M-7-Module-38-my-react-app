export default function IsDone({task,isDone}){
    // if(isDone){
    //     return(
    //     <li>finished : {task}</li>
    //     )
    // }else{
    //     return (
    //     <li>work on : {task}</li>
    //     )
    // }

    // return (
    //     <li>{isDone? 'finished':'work on'} :{task}</li>
    // )

    // return(
    //     <li>{task} {isDone && ":done"}</li>
    // )
    return(
        <ul>
            <li>{task} {isDone && ":done"}</li>
            <li>{task} {isDone || ":work on"}</li>
        </ul>
    )
}