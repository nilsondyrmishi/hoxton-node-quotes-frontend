import {useEffect,useState} from "react";
import Quote from "../components/Quote";

function RandomQuote(){
    const [quote,setQuotes]=useState<Quote|null>(null)
    useEffect(()=>{
        fetch("http://localhost:8080/random")
            .then(r =>r.json())
            .then(quote=>setQuotes(quote))
    },[]);
    if (quote===null)return<h1>Loading Please Wait!</h1>
    return <Quote quote={quote}/>
}
export default RandomQuote
