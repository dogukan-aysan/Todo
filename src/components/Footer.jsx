function Footer() {
  return (
    <div className="footer">
      <div className="footer__leftover">
        <Leftover />
      </div>
      <div className="footer__filter">
        <Filters />
      </div>
      <div className="footer__clear-completed">
        <ClearCompleted />
      </div>
    </div>
  );
}

export default Footer;
