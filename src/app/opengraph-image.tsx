import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";
import { geoData } from "@/data/geo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(124, 92, 255, 0.25) 0%, transparent 60%)",
          color: "#EDEDEF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#7C5CFF",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "monospace",
              color: "#7C5CFF",
              letterSpacing: "0.1em",
            }}
          >
            {profileData.name.toUpperCase()} · PORTFOLIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            {geoData.role}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#A1A1AA",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {profileData.positioningLine}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #222228",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", fontSize: "16px", color: "#71717A" }}>
            <span>ATS with AI Voice</span>
            <span>·</span>
            <span>Multi-Tenant CRM</span>
            <span>·</span>
            <span>LangGraph Agents</span>
            <span>·</span>
            <span>Web Scrapers</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: 600,
              color: "#7C5CFF",
              fontFamily: "monospace",
            }}
          >
            {profileData.city}, {profileData.country}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
