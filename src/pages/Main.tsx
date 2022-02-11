import TheQuoteList from "../components/TheQuoteList"
import {useEffect, useState} from "react";

function Main(){
    // @ts-ignore
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(()=>{
        fetch(" http://localhost:8080/quotes")
            .then(r => r.json())
            .then(quotes=>setQuotes(quotes))

    },[])
    return(
       <div>

           <TheQuoteList theQuotes={quotes}/>
       </div>
    )
}
export default Main
