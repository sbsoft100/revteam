import heroBg from "@/assets/hero-bg.jpg";

const navLinks = ["Issues", "Interviews", "Reviews", "About us", "Education", "Contact Us"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Top Bar */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold italic text-primary-foreground tracking-tight">
          Mosaic
        </h2>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
            Login
          </a>
          <span className="text-primary-foreground/30">|</span>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
            Literary Freedom Project
          </a>
          <a
            href="#"
            className="bg-primary text-primary-foreground px-6 py-2 text-sm font-body font-medium hover:opacity-90 transition-opacity"
          >
            Donate
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end justify-between px-6 md:px-12 pb-16">
        {/* Tagline */}
        <div className="max-w-lg">
          <div className="flex gap-4">
            <div className="w-1 bg-primary flex-shrink-0" />
            <div>
              <p className="text-primary-foreground/70 font-body text-lg md:text-xl">
                Celebrating The Voices Of
              </p>
              <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold mt-1">
                The African And Latinx Diaspora
              </p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex flex-col items-end gap-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-lg transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
