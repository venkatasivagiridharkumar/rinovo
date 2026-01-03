import "./index.css";

const brands = [
  "NEOM",
  "BNP PARIBAS",
  "ADVANIA",
  "RE/MAX",
  "EUROFOUND",
  "THERMOFISHER",
  "EY",
  "NOKIA",
  "SAGE",
  "APPTWEAK",
  "TRUSTPORTAL",
  "EI EVERYWHERE",
  "MINICLIP",
  "MOLOCO",
  "FLIPPED NORMALS",
  "FARMLINK",
  "ANOVA",
  "ELSA",
  "OBÉ",
  "ENDIPREV",
  "TRAVELWIFI",
  "CTT",
  "LISBOA",
  "BANCO MONTEPIO",
  "LABIALFARMA",
  "TAP",
];

export default function Clients() {
  return (
    <section className="clients-text-section">
      <h2>Some of Our Clients</h2>

      <div className="marquee">
        <div className="marquee-track">
          {/* first loop */}
          {brands.map((brand, i) => (
            <span className="brand-text" key={`a-${i}`}>
              {brand}
            </span>
          ))}

          {/* duplicate loop for seamless scroll */}
          {brands.map((brand, i) => (
            <span className="brand-text" key={`b-${i}`}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="clients-cta">
        <button>All Industries</button>
      </div>
    </section>
  );
}
