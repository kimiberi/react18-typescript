import React, { useState } from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    const onAddGuest = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <>
            <h3>GuestList</h3>

            <ul>
                {guests.map((guest, index) => <li key={index}>{guest}</li>)}
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onAddGuest}>Add Guest</button>
            <p>{guests}</p>

            <br /><br />
            <hr />
        </>
    )
}

export default GuestList