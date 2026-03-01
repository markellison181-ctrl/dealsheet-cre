import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
          padding: '4px',
          gap: '1px',
        }}
      >
        {/* Building silhouette with chart bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
          <div style={{ width: '4px', height: '10px', background: '#c9a84c', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '15px', background: '#c9a84c', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '20px', background: '#c9a84c', borderRadius: '1px' }} />
          <div style={{ width: '6px', height: '22px', background: '#c9a84c', borderRadius: '1px 1px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '2px', gap: '2px' }}>
            <div style={{ width: '3px', height: '2px', background: '#1a2332' }} />
            <div style={{ width: '3px', height: '2px', background: '#1a2332' }} />
            <div style={{ width: '3px', height: '2px', background: '#1a2332' }} />
          </div>
          <div style={{ width: '4px', height: '16px', background: '#c9a84c', opacity: 0.6, borderRadius: '1px' }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
