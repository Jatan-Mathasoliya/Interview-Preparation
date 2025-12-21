import React from 'react'

function Modal({ closeModel, children }) {
    return (
        <div className="modal" onClick={closeModel}>
            this is the outside of modal. click to close    
            <section onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={closeModel}> X </button>
            </section>
        </div>
    )
}

export default Modal