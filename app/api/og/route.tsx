import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Project"
    const tags = searchParams.get("tags") || ""
    const category = searchParams.get("category") || "Project"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "24px",
            padding: "60px",
            margin: "40px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            maxWidth: "1000px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#0891b2",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: "48px",
              color: "#1e293b",
              marginBottom: "24px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          {tags && (
            <div
              style={{
                fontSize: "20px",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              {tags}
            </div>
          )}
          <div
            style={{
              fontSize: "18px",
              color: "#0891b2",
              fontWeight: 600,
            }}
          >
            Sirisha Ganji Portfolio
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
