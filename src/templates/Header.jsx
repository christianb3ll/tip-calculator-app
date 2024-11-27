import logo from '../assets/logo.svg'

function Header() {
    return (
      <header className="p-4 lg:my-8">
        <img className="m-auto" src={logo} alt='Splitter Logo'/>
      </header>
    );
  }

export default Header