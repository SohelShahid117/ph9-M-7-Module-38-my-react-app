import './book.css'

export default function Book({boiii}){
    console.log(boiii)
    const {id,name,price} = boiii;
    return(
        <div className='book'>
            {/* <h3>Book Name : {boks}</h3> */}
            <h3>Book Name : {name}</h3>
            <h4>Price : {price}</h4>
        </div>
    )
}