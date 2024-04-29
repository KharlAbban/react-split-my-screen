import { useRef, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const panelRef = useRef(null);

  const handlePanelCollapse = (Event) => {
    console.log("Panel has collapsed!");
    setIsExpanded(false);
  }
  const handlePanelEXpand = (Event) => {
    console.log("Panel has expanded!");
    setIsExpanded(true);
  }
  const collapsePanel = () => {
    panelRef.current.expand();
  }

  return (
      <div className="drawer h-screen w-screen text-gray-950">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <PanelGroup autoSaveId="persistence" className="" direction="horizontal">
          <Panel ref={panelRef} onExpand={handlePanelEXpand} onCollapse={handlePanelCollapse} id="23" className="h-screen max-lg:hidden flex items-center" collapsible={true} defaultSize={16} minSize={15} maxSize={20}>
          <div className="avatar">
            <div className="w-3/4 mx-auto rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          </Panel>
          <PanelResizeHandle title="Drag around to resize panes" className="add-hover-resizer" />
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
          </Panel>
        </PanelGroup>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
