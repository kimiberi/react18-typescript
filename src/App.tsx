import React from 'react'
import EventComponent from './events/EventComponent'
import Parent from './props/Parent'
import UserSearch from './refs/2 UserSearch'
import GuestList from './state/1 GuestList'
// import UserSearch from './state/2 UserSearch'

const App = () => {
  return (
    <>
      <UserSearch />
      <Parent />
      <EventComponent />
      <GuestList />
    </>
  )
}

export default App