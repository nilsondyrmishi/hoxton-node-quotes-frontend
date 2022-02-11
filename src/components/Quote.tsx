
type Props={
    // @ts-ignore
    quote:Quote;

};

function Quote({quote}:Props){
return(<>
    <q>{quote.theQuote}</q>
    <span> - {quote.author}</span>
</>)
}
export default Quote
