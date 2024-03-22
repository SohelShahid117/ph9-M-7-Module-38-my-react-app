import Book from "./Book"
export default function BookStore({bks}){
    console.log(bks)
    // {
    //     nayok.map((name)=><Actor nam={name}></Actor>)

    //   }
    return(
        <div>
            <h3>Books : {bks.length}</h3>
            {
                bks.map((boi)=><Book boiii = {boi}></Book>)
            }
        </div>
    )
}