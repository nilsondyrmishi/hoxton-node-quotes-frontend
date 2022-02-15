function AddNewQuote() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                const formEl = event.target as HTMLFormElement & {
                    theQuote: HTMLInputElement;
                    firstName: HTMLInputElement;
                    lastName: HTMLInputElement;
                    age: HTMLInputElement;
                    image: HTMLInputElement;
                };
                const newQuote = {
                    theQuote: formEl.theQuote.value,
                    firstName: formEl.firstName.value,
                    lastName: formEl.lastName.value,
                    age: Number(formEl.age.value),
                    image: formEl.image.value
                };
                fetch("http://localhost:8080/quotes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newQuote)
                })
                    .then((resp) => resp.json())
                    .then((parsedResp) => {
                        if (parsedResp.errors) {
                            console.log(parsedResp.errors);
                        } else {
                            console.log("quote added successfully");
                        }
                    });
                formEl.reset();
            }}
        >
            <label>
                Quote: <input type="text" name="theQuote" required />
            </label>
            <label>
                First Name: <input type="text" name="firstName" required />
            </label>
            <label>
                Last Name: <input type="text" name="lastName" required />
            </label>
            <label>
                Age: <input type="number" name="age" required min={0} />
            </label>
            <label>
                Image: <input type="url" name="image" required />
            </label>
            <button type="submit"> Submit</button>
        </form>
    );
}

export default AddNewQuote;
