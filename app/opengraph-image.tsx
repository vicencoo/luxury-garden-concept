import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The card WhatsApp, Facebook and Instagram show when someone shares the link.
export const alt = "Luxury Garden: pemë dekorative, vazo, lule dhe kopshte luksoze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [serif, photo] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/@fontsource/marcellus/files/marcellus-latin-400-normal.woff")),
    readFile(join(process.cwd(), "public/ig/ulli-nate.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0f241b", padding: 28 }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            border: "1.5px solid rgba(201,169,110,0.35)",
            borderRadius: 28,
            padding: "56px 0 56px 64px",
            alignItems: "stretch",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#f6f4ee" }}>
              <svg width="58" height="48" viewBox="0 0 48 40" fill="#c9a96e">
                <ellipse cx="13" cy="13" rx="10" ry="5.5" />
                <ellipse cx="35" cy="12" rx="10.5" ry="5.5" />
                <ellipse cx="24" cy="7.5" rx="11" ry="6" />
                <ellipse cx="24" cy="16" rx="8" ry="4" />
                <ellipse cx="7" cy="19" rx="5" ry="2.8" />
                <ellipse cx="41" cy="18.5" rx="5" ry="2.8" />
                <path d="M22 39c.8-4.6.6-9-1.6-12.6-1.6-2.6-4.6-4.4-8.4-5.6 4.4.2 7.6 1.4 9.8 3.4l.4-4.4h3.4l.4 4.4c2.2-2 5.4-3.2 9.8-3.4-3.8 1.2-6.8 3-8.4 5.6-2.2 3.6-2.4 8-1.6 12.6h7.2v1h-18.4v-1Z" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column", fontSize: 26, letterSpacing: 6, lineHeight: 1.05 }}>
                <span>LUXURY</span>
                <span>GARDEN</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 66, lineHeight: 1.1, color: "#f6f4ee", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <span>Kopshte&nbsp;</span>
                  <span style={{ color: "#c9a96e" }}>luksoze,</span>
                </div>
                <span>pemë dhe vazo</span>
                <span>të zgjedhura.</span>
              </div>
              <div style={{ marginTop: 26, fontSize: 24, color: "rgba(246,244,238,0.65)", letterSpacing: 1 }}>
                Projektim · Zbatim · Mirëmbajtje · Pakicë dhe shumicë
              </div>
            </div>
          </div>

          <div style={{ width: 360, display: "flex", padding: "0 44px 0 40px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
            <img
              src={photoSrc}
              alt=""
              width={276}
              height={462}
              style={{ width: 276, height: 462, objectFit: "cover", borderRadius: "138px 138px 24px 24px" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Marcellus", data: serif, style: "normal", weight: 400 }],
    },
  );
}
