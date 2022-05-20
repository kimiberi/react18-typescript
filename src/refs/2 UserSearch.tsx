import React, { useEffect, useRef, useState } from 'react'

const users = [
    { name: "Sarah", age: 20 },
    { name: "John", age: 20 },
    { name: "Michael", age: 25 },
];

const UserSearch: React.FC = () => {
    // useRef mainly use to trigger auto focus in <input />
    // you may search other elements like '<HTMLElement>' by clicking it and shows the list under 'global.d.ts'
    // 'null' means default value for the meantime while you're not assigning anything yet
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState<string>('');
    // NOTE: if you put only 'useState()' as empty, it is considered as UNDEFINED when:
    // (1) when the component is first rendered
    // (2) when search did not find a user
    // From this, we may put two or more possible types of value '<{name: string, age: number} | undefined>'
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onSearch = () => {
        const foundUser = users.find((usersList) => usersList.name === name);

        // console.log(foundUser);
        // we may put two or more possible types of value in the state instead of using console '<{name: string, age: number} | undefined>'

        setUser(foundUser);
    }

    useEffect(() => {
        // auto focus in <input /> field
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus()
    }, []);


    return (
        <>
            <h3>User Search with useRef</h3>

            {user && <p>{user?.name} , {user?.age}</p>}

            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onSearch}>Search</button>

        </>
    )
}

export default UserSearch