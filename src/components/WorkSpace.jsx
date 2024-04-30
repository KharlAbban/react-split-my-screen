import React from 'react'
import { Panel } from 'react-resizable-panels'
import { Outlet } from 'react-router-dom'

const WorkSpace = ({isExpanded, collapsePanel}) => {
  return (
    <Panel className="h-screen py-2 pr-3 pl-1 max-lg:p-0">
        <section className="w-full h-full p-2 bg-gray-100 lg:rounded shadow whiteSection">
            {!isExpanded && <button onClick={collapsePanel} className="bg-teal-400 p-2 m-4 rounded hover:bg-teal-500 duration-200 max-lg:hidden">Show resizable bar</button>}
            <label htmlFor="my-drawer" className="float-end btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <br />
            <h2 className="text-2xl">Hi there 😁</h2>
            <p>This page is a sample test of <a href="https://linear.app" className="link link-info">linear.app</a>'s homepage layout</p>
            <p>Try it out and lemme know what you think</p>
            <br />
            <h3  className="text-xl underline">What you can do</h3>
            <ul className="list-disc">
            <li>~You can resize the white section (yeah, terrible naming)</li>
            <li>~You can collapse the sidebar by dragging the white section (again, 😔) to the left end of the screen</li>
            <li>~And one more trick, ✨, change your browser size to see the hidden full page navbar</li>
            <li>~Explore - there's probably some  hidden secret! 😉</li>
            </ul>
        </section>
        <Outlet />
    </Panel>
  )
}

export default WorkSpace
