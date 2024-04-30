import React from 'react'

const FullWidthSideBar = () => {
  return (
      <aside className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Full width Sidebar content here */}
          <label htmlFor="my-drawer" aria-label="close sidebar" className="">Close sidebar</label>
          <p><a>Sidebar Item 1</a></p>
          <p><a>Sidebar Item 2</a></p>
        </aside>
  )
}

export default FullWidthSideBar