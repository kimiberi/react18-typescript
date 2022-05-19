import React from 'react'
import { Child, ChildAsFC } from './Child'

// Parent is an interface to define what props Child expects to receive
// In typescript: 
// (1) Are we providing the correct props to Child?
const Parent = () => {
    return (
        <>
            <div>Parent</div>
            <Child color='mint green' onClickMe={() => console.log('Clicked Child')} />

            {/* NOTICE declaring this as PURE Functional Component, we can use children */}
            <ChildAsFC color='ocean blue' onClickMe={() => console.log('Clicked ChildAsFC')} />
        </>
    )
}

export default Parent