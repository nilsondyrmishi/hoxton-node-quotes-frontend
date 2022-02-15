
type Props={
    quote:Quote;

};

function Quote({quote}:Props){
return(<>
    <div>
        <img src={quote.image} alt="img" />
    </div>
    <q>{quote.theQuote}</q>
    <span> -{quote.firstName} {quote.lastName}[{quote.age}]</span>
</>)
}
export default Quote
