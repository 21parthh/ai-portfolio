/* Traffic-light section divider. Bound asymmetrically to the section it
   closes (64px above, 40px below). `pop` = spring entrance — first divider
   only; the rest just appear. */
export const Dots = ({ pop = false }: { pop?: boolean }) => (
    <div
        aria-hidden="true"
        className={`mb-10 mt-16 flex items-center justify-center gap-2 ${
            pop ? "dots-pop" : ""
        }`}
    >
        <span className="dot h-1.5 w-1.5 rounded-full" style={{ background: "var(--dot-red)" }} />
        <span className="dot h-1.5 w-1.5 rounded-full" style={{ background: "var(--dot-yellow)" }} />
        <span className="dot h-1.5 w-1.5 rounded-full" style={{ background: "var(--dot-green)" }} />
    </div>
);
