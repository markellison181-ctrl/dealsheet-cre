import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a2332',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          borderRadius: '36px',
          padding: '25px',
          gap: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
          <div style={{ width: '18px', height: '50px', background: '#c9a84c', borderRadius: '3px' }} />
          <div style={{ width: '18px', height: '75px', background: '#c9a84c', borderRadius: '3px' }} />
          <div style={{ width: '18px', height: '100px', background: '#c9a84c', borderRadius: '3px' }} />
          <div style={{ width: '28px', height: '110px', background: '#c9a84c', borderRadius: '4px 4px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '8px', gap: '8px' }}>
            <div style={{ width: '14px', height: '6px', background: '#1a2332' }} />
            <div style={{ width: '14px', height: '6px', background: '#1a2332' }} />
            <div style={{ width: '14px', height: '6px', background: '#1a2332' }} />
          </div>
          <div style={{ width: '18px', height: '80px', background: '#c9a84c', opacity: 0.6, borderRadius: '3px' }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
