const Footer = () => {
  return (
    <footer className="postion:fixed footer footer-center bg-main p-4 text-base-content">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Sein</p>
      </aside>
    </footer>
  );
};

export default Footer;
