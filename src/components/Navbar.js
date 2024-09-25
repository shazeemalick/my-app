import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='mainBox'>
      <ul>
        <div className='box1'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </div>
        <button>Login Now</button>
      </ul>
    </div>
  );
}

export default Navbar;
