import React from 'react'
import { Outlet } from 'react-router';
import MainNavigation from './MainNavigation';
import classes from './Root.module.css';

const Root = () => {
  return (
    <>
      <MainNavigation/>
      <main className={classes.main}>
        <Outlet/>
      </main>
    </>
  )
}

export default Root;