import { ImageResponse } from "next/og";

// Home-screen icon for iPhone: the gold tree mark on brand green.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f241b",
        }}
      >
        <svg width="118" height="98" viewBox="0 0 48 40" fill="#c9a96e">
          <ellipse cx="13" cy="13" rx="10" ry="5.5" />
          <ellipse cx="35" cy="12" rx="10.5" ry="5.5" />
          <ellipse cx="24" cy="7.5" rx="11" ry="6" />
          <ellipse cx="24" cy="16" rx="8" ry="4" />
          <ellipse cx="7" cy="19" rx="5" ry="2.8" />
          <ellipse cx="41" cy="18.5" rx="5" ry="2.8" />
          <path d="M22 39c.8-4.6.6-9-1.6-12.6-1.6-2.6-4.6-4.4-8.4-5.6 4.4.2 7.6 1.4 9.8 3.4l.4-4.4h3.4l.4 4.4c2.2-2 5.4-3.2 9.8-3.4-3.8 1.2-6.8 3-8.4 5.6-2.2 3.6-2.4 8-1.6 12.6h7.2v1h-18.4v-1Z" />
        </svg>
      </div>
    ),
    size,
  );
}
