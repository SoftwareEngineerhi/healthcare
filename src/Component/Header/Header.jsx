export function Header(){
return(
        <>
    <header className="dashboard-header">
      <div className="header-logo">
        <span className="blue">Health</span>care.
      </div>
    <div className="header-center">
        <div className="header-search">
          <img className="search-icon" src="https://cdn-icons-png.flaticon.com/128/12506/12506465.png" />
          <input type="text" placeholder="Search" disabled/>
        </div>
        <img className="icon bell-icon" src="https://cdn-icons-png.flaticon.com/128/11539/11539772.png" />
      </div>

      <div className="header-right">
        <div className="profile">
        <img src="https://cdn-icons-png.flaticon.com/128/11918/11918414.png" alt="profile" className="profile-pic" />
        <span className="profile-name">Nalini</span>
        </div>
        <button className="plus-button">+</button>
      </div>
    </header>
    
        </>
    )
}