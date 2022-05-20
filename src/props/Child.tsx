import React from 'react'

// define ALL props this Child component should receive
interface ChildProps {
    color: string;
    onClickMe: () => void; // it may not return any value on click
}

// [OPTION: 1]
// using Destructuring
// This component has disadvantage too whe it comes to its default properties
export const Child = ({ color, onClickMe }: ChildProps) => {
    return (
        <>
            <p>Child Component</p>
            <p>Color: {color}</p>
            <button onClick={onClickMe}>Click Me!</button>
        </>
    )
}

// RECOMMENDED [OPTION: 2]
// NOTE: All React Components can optionally provide these properties:
// (1) propTypes (2) displayName (3) defaultProps (4) contextTypes
// However, TS doesn't know that we made a React component, 
// so it thinks that 'Child' will not have these properties!!

// ANOTHER WAY to define FC with TS
// Now it will become a PURE React Function Component
// it might have properties assigned like (1) propTypes (2) displayName (3) defaultProps (4) contextTypes
// it will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClickMe }) => {
    return (
        <>
            <p>Child Component as FC</p>
            <p>Color: {color}</p>
            <button onClick={onClickMe}>Click Me!</button>
        </>
    )
}
