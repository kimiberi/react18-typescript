import React from 'react'

const EventComponent: React.FC = () => {

    // NOTE: you get this 'React.ChangeEvent<HTMLInputElement>' when you hover 'onChange'
    // you may search other Event Handler by clicking Event like 'ChangeEvent or DragEvent' and you will be redirect to 'index.d.ts'
    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    // NOTE: you get this 'React.DragEvent<HTMLDivElement>' when you hover 'onDragStart'
    const onDragStartEvent = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e);
    };

    return (
        <>
            <h2>Separate Event Handlers</h2>

            <h3>Standalone Event Handlers</h3>
            <p>NOTE: alternative to <span style={{ color: 'orange' }}>{`onChange={(e) => console.log(e.target.value)}`}</span></p>
            <input onChange={onChangeEvent} />

            <br /><br /><hr />

            <h3>Drag Event Handlers</h3>
            <div draggable onDragStart={onDragStartEvent}>Drag Me!</div>

            <br /><br />
            <hr />
        </>
    )
}

export default EventComponent