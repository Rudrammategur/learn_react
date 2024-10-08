import './header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Fruits List</h1>
      <nav>
        <ul className="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
