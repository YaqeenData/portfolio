/** The sky behind every page: deep cobalt night, or a rose-and-amber twilight. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="only-night absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 74% 28%, #16296A 0%, rgba(12,23,64,0.85) 40%, rgba(7,13,34,0) 80%), radial-gradient(40% 30% at 70% 60%, rgba(255,138,43,0.08), rgba(255,138,43,0)), #070D22",
        }}
      />
      <div
        className="only-twilight absolute inset-0"
        style={{ background: "linear-gradient(180deg, #FFF5EE 0%, #FFDCC4 45%, #FFB896 80%, #FF9DB8 100%)" }}
      />
    </div>
  );
}
