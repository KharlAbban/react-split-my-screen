import React from 'react'
import { Panel } from 'react-resizable-panels'
import { IoMdCog } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const CollapsibleSideBar = ({handlePanelCollapse, handlePanelEXpand, panelRef}) => {
  return (
    <Panel ref={panelRef} onExpand={handlePanelEXpand} onCollapse={handlePanelCollapse} id="23" className="bg-blue-100 h-screen max-lg:hidden flex flex-col justify-between pt-2" collapsible={true} defaultSize={16} minSize={15} maxSize={20}>
        {/* Sidebar Content */}
        <div className='px-1'>
          {/* Company Name */}
          <h2 class="text-center font-bold text-xl">
            NOCTTAPP
          </h2>

          <div class="divider my-0"></div>

          {/* Top menu */}
          <div class="flex flex-col gap-2 mt-4">
              <div class="flex justify-between items-center">
                  <h2 class="font-bold text-lg">Me</h2>
              </div>

              <ul class="menu p-0 font-semibold">
                <li>
                  <a><i class="fa-solid fa-chart-line fa-fw"></i>My Tickets</a>
                </li>
                <li>
                  <a><i class="fa-solid fa-users fa-fw"></i>My Settings</a>
                </li>
              </ul>
          </div>

          <div class="divider divider-neutral my-3"></div>

          {/* Bottom menu */}
          <div class="flex flex-col gap-2">
              <div data-tip="Click to change workspaces" class="tooltip flex justify-between items-center">
                <div className="dropdown">
                  <h2 tabIndex={0} role='button' class="font-bold text-lg flex gap-2 items-center">Team Name <IoMdArrowDropdown size={25} /></h2>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>

              <ul class="menu p-0 font-semibold">
                <li>
                  <a className='active'><i class="fa-solid fa-house fa-fw"></i>Home</a>
                </li>
                <li>
                  <a><i class="fa-solid fa-chart-line fa-fw"></i>Tickets</a>
                </li>
                <li>
                  <a><i class="fa-solid fa-list fa-fw"></i>Statistics</a>
                </li>
                <li>
                  <a><i class="fa-solid fa-users fa-fw"></i>Team Settings</a>
                </li>
              </ul>
          </div>
        </div>

        {/* UserInfoBox */}
        <div className='userInfoBox border-t border-t-blue-900 p-1 max-h-16 flex gap-4'>
          <div className="avatar">
            <div className="w-12 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className='userInfoBox-title flex justify-between w-full'>
            <span className='flex flex-col'>
              <span className='font-semibold'>User Full Name</span>
              <span className='text-sm'>Username</span>
            </span>
            <span className='grid place-items-center text-sm py-0 pr-1 my-0'>
              <a target='_blank' href='https://react-split-my-screen.vercel.app' title='Settings' className='duration-200 p-1 border-0 rounded hover:border-0 outline-none hover:bg-blue-700 hover:text-white'>
                <IoMdCog size={30} />
              </a>
            </span>
          </div>
        </div>
    </Panel>
  )
}

export default CollapsibleSideBar
