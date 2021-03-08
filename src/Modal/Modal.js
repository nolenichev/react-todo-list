import React from 'react'
import './modal.scss'

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true })}>
                    Open Modal
                </button>
                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iste, assumenda adipisci atque
                                at ipsa maiores provident dolorum similique aut
                                illo amet fugit incidunt voluptas modi a veniam
                                praesentium in illum?
                            </p>
                            <button
                                onClick={() => this.setState({ isOpen: false })}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
