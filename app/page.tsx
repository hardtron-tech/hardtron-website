const WHATSAPP_URL = "https://wa.me/8615015151556";

const benefits = [
  "Industrial Parts Supply",
  "Local Support in Europe",
  "Up to 24 Months Warranty",
];

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.44L3.5 20.5l1.56-4.4A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 7.9c.2-.45.42-.46.72-.47h.6c.16 0 .34.06.44.3l.77 1.84c.08.2.05.38-.08.55l-.6.75c-.13.15-.14.3-.04.48.47.81 1.42 1.75 2.24 2.2.18.1.34.08.48-.07l.72-.81c.17-.19.36-.22.56-.13l1.86.88c.2.1.31.24.27.48-.13.77-.57 1.47-1.18 1.84-.59.35-1.4.46-2.18.2-1.22-.4-2.54-1.12-3.67-2.24-1.14-1.12-1.88-2.42-2.3-3.64-.27-.77-.18-1.57.17-2.16Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="business-card" aria-labelledby="page-title">
        <div className="business-card__intro">
          <p className="eyebrow">Industrial Automation</p>
          <h1 id="page-title">Spare Parts · Exchange · Repair</h1>
          <p className="brand-line">FANUC · OKUMA</p>
        </div>

        <ul className="benefit-list" aria-label="Service benefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span aria-hidden="true">—</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="contact-message">
          <div>
            <p>Looking for a part?</p>
            <p>Send us the part number or a photo.</p>
          </div>
          <a
            className="whatsapp-button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </section>

      <footer className="legal-disclaimer">
        All trademarks and brand names are the property of their respective
        owners. This website is an independent supplier and is not affiliated
        with, authorized by, or endorsed by any manufacturer.
      </footer>
    </main>
  );
}
