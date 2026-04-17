const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold italic mb-2">Mosaic</h2>
          <p className="font-body text-sm text-primary-foreground/60">
            Celebrating the voices of the African and Latinx diaspora.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-primary-foreground/40 mb-3">Navigate</h4>
            <ul className="space-y-2">
              {["Issues", "Interviews", "Reviews", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-primary-foreground/40 mb-3">Connect</h4>
            <ul className="space-y-2">
              {["Twitter", "Instagram", "Facebook", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-primary-foreground/10">
        <p className="font-body text-xs text-primary-foreground/40">
          © 2025 Mosaic Magazine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
