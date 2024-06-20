import ProptTypes from 'prop-types';
import { useRef, useState } from 'react';
function Trivia({Data}) {
    let [answer, setAnswer] = useState('')
    let form = useRef(null);
    let ansewrBox = useRef(null);
    let triviaResult = (e) => {
        e.preventDefault();
        let selectedOption = form.current.querySelector('input:checked').value;
        console.log(selectedOption);
        for (const option of Data) {
            if (option.text === selectedOption) {
                setAnswer(option.message);
                if (option.correct) {
                    ansewrBox.current.style.color = 'green';
                } else {
                    ansewrBox.current.style.color = 'red';
                }
            }
        }
    }
    return (
        <form action="/" ref={form} onSubmit={triviaResult}>
            {Data.map((item, index) => {
                let idRef = `${item.name}-${item.text}`;
                return (
                    <section key={index}>
                        <input type="radio"  id={idRef} name={item.name}  value={item.text} />
                        <label htmlFor={idRef}>{item.text}</label>
                    </section>
                )
            })}
            <strong ref={ansewrBox}>{answer}</strong>
            <button type="submit">Responder</button>
        </form>
    )
}

Trivia.propTypes = {
    Data: ProptTypes.array.isRequired
}

export default Trivia;