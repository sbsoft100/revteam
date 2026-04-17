const ConferenceSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-primary font-body text-xs font-medium tracking-widest uppercase">
            [Mosaic Literary Conference]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <p className="text-muted-foreground font-body text-xs uppercase tracking-widest mb-1">day</p>
              <p className="font-display text-xl font-bold text-foreground">SATURDAY, NOVEMBER 22, 2025</p>
            </div>
            <div className="mb-8">
              <p className="text-muted-foreground font-body text-xs uppercase tracking-widest mb-1">time</p>
              <p className="font-display text-xl font-bold text-foreground">12–6 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Extending the Conversation Beyond the Page
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Mosaic's annual Literary Conference gathers writers, educators, and readers to explore
              the themes and voices shaping contemporary literature from the African and Latinx diaspora.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
