import { useRef, useState } from "react";
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { CollapsibleSideBar, FullWidthSideBar, WorkSpace } from "./components";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const panelRef = useRef(null);

  const handlePanelCollapse = () => setIsExpanded(false)
  const handlePanelEXpand = () => setIsExpanded(true);
  const collapsePanel = () => panelRef.current.expand();

  return (
      <div className="drawer h-screen w-screen text-gray-950">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <PanelGroup autoSaveId="persistence" className="" direction="horizontal">
          {/* Collapsible Sidebar Here */}
          <CollapsibleSideBar handlePanelEXpand={handlePanelEXpand} panelRef={panelRef} handlePanelCollapse={handlePanelCollapse} />

          <PanelResizeHandle title="Drag around to resize panes" className="add-hover-resizer" />

          <WorkSpace isExpanded={isExpanded} collapsePanel={collapsePanel} />

        </PanelGroup>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <FullWidthSideBar />
      </div>
    </div>
  )
}

export default App
