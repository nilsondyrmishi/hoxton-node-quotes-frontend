import Quote from "./Quote";
type Props={
    theQuotes:Quote[];
};

function TheQuoteList({theQuotes}:Props){
    return(<div>
        <ul>
            {theQuotes.map((quote) => (
                <li  key={quote.id}>
                    <Quote quote={quote} />
                </li>
            ))}
        </ul>
    </div>)
}
export default TheQuoteList
