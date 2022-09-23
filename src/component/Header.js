const NAVLINK = [
  { id: 1, menu: "COMPANY", link: "/" },
  { id: 2, menu: "THEPARTY", link: "/" },
  { id: 3, menu: "NEW&EVENT", link: "/" },
  { id: 4, menu: "CATERING", link: "/" },
  { id: 5, menu: "CUSTOMER", link: "/" },
];

const Header = () => {
  return (
    <header className="Header">
      <div className="inner">
        <div className="hd_wrap">
          <h1>
            <a href="">THEPARTY</a>
          </h1>

          <nav className="Gnb inner">
            <ul>
              {NAVLINK.map((it, idx) => {
                return (
                  <li key={it.id}>
                    <a href={it.link}>{it.menu}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="user">
            <i className="xi-gift-o"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
