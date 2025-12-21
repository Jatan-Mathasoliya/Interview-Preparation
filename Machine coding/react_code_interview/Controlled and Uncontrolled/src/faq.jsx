import { useState } from "react";

function FAQ({questions, answers}) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div onClick={() => setShow(!show)}>
                {questions}
            </div>

            {show && (
                <div>
                    {answers}
                </div>
            )}
        </div>
    )
}

export default FAQ;