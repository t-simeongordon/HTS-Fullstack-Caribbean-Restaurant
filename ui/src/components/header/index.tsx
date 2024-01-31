import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Caribbean Restaurant</h1>
      <div className="tabs">
        <div className="tab">Menu</div>
        <div className="tab">Location</div>
      </div>
    </div>
  );
}

export default Header;