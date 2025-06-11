import '../../styles/Sidebar.css';
import { useState } from 'react';
export function Sidebar({navigation}){
     
   const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    return(
        <>
        <button className={`menu-button ${sidebarOpen ? 'cross' : ''}`} onClick={toggleSidebar}>{sidebarOpen? <span>X</span> : <span>☰ sidebar</span> }</button>
        <aside className={`sidebar ${sidebarOpen ? 'showsb' : ''}`}>
  
        <h2 className="sidebar-heading">Genral</h2>
        <nav className="sidebar-nav">
        <ul>
            {navigation.map((navs,i)=>
            (<li key={i}><span className={`dark ${i===0?'on':'off'}`}><img className="icons" src={navs.icon}/>{navs.name}</span>
            </li>))}
        </ul>
        </nav>
        </aside>

        </>
    )
}