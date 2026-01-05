import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HEIMDEX - Smart Video Management Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050709 0%, #0a0f1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          HEIMDEX
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Make every video searchable, reusable, and protected
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
