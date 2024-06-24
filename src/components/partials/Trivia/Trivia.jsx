import ProptTypes from 'prop-types';
import { useRef, useState } from 'react';
function Trivia({Data, Answer}) {
    let [answer, setAnswer] = useState('')
    let form = useRef(null);
    let ansewrBox = useRef(null);
    let triviaResult = (e) => {
        e.preventDefault();
        let selectedOption = form.current.querySelector('input:checked').value;
        for (const option of Data) {
            if (option.value === selectedOption) {
                if (option.correct) {
                    ansewrBox.current.style.color = 'green';
                    setAnswer(Answer.correct);
                } else {
                    ansewrBox.current.style.color = 'red';
                    setAnswer(Answer.incorrect)
                }
            }
        }
    }
    return (
        <form action="/" ref={form} onSubmit={triviaResult}>
            {Data.map((item, index) => {
                let idRef = `${item.name}-${item.value}`;
                return (
                    <section key={index}>
                        <input type="radio"  id={idRef} name={item.name}  value={item.value} />
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
    Data: ProptTypes.array.isRequired,
    Answer: ProptTypes.object.isRequired,
}

export default Trivia;