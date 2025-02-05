import img from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">Other</a>
        </div>
        <div>
          <p>+78978978978</p>
          <p>site@site.site</p>
        </div>
        <img src={img.src} />
      </nav>
    </header>
  );
}
