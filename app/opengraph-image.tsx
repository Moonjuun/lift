import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#ff5c35";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* 우상단 브랜드 글로우 */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: BRAND,
            opacity: 0.12,
          }}
        />

        {/* 로고 마크 + 워드마크 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 24,
              background: BRAND,
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              L
            </div>
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, color: "#171717" }}>
            {SITE.name}
          </div>
        </div>

        {/* 타이틀 + 설명 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#171717",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            AI 학습 레벨 테스트
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#525252",
              lineHeight: 1.4,
              maxWidth: 940,
            }}
          >
            {SITE.description}
          </div>
        </div>

        {/* 하단 강조 바 */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 64, height: 8, borderRadius: 9999, background: BRAND }} />
          <div style={{ fontSize: 26, fontWeight: 600, color: BRAND }}>
            나에게 맞는 AI 학습 경로 찾기
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
