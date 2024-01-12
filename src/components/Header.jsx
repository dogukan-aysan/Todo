function Header() {
  return (
    <div className="header">
      <h1 className="header__heading">TODO</h1>
      <div className="header__dark-mode-toggle">
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header;
