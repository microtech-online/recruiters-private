import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);

  const profile = await fetch('https://yourname.com/data/profile.json').then(res => res.json());
  const { name, headline, site } = profile;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0a66c2, #0a0a0a)',
          padding: '80px',
          fontFamily: 'Inter',
          color: 'white',
        }}
      >
        <img
          src="https://yourname.com/images/profile.jpg"
          width={220}
          height={220}
          style={{ borderRadius: '50%', marginRight: 60 }}
        />

        <div>
          <h1 style={{ fontSize: 64, margin: 0 }}>{name}</h1>
          <p style={{ fontSize: 34, marginTop: 20, opacity: 0.9 }}>
            {title}
          </p>
          <p style={{ marginTop: 40, fontSize: 26, opacity: 0.7 }}>
            {site}
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
