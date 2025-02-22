import React, { Fragment } from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <>
      <div className='p-2 shadow-sm flex justify-between items-center px-5'>
        <img src="/logo.svg" />
        <div className='flex gap-9 mr-3'>
          <Button>Sign Up</Button>
          <Button>About</Button>
        </div>

      </div>
    </>
  )
}

export default Header