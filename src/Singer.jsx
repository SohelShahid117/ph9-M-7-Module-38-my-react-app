export default function Singer({singr}){
    console.log(singr)
    const devoStyle = {
        border : '2px solid red',
        margin :"10px",
        padding:'20px',
        backgroundColor:'orange',
        borderRadius:'20px'
      }
    return (
        // <ul>
        //     <li>age : {singr['age']}</li>
        // </ul>
        <div style={devoStyle}>
            <h3>name : {singr['name']}</h3>
            <h3>age : {singr['age']}</h3>
            <h3>gender : {singr['gender']}</h3>
        </div>
    )
}

// export default function Actor({nam}){
//     return <li>{nam}</li>
// }