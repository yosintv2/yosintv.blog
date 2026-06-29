import { useState, useEffect, useRef } from 'react';
import { config } from '../config';

export default function Ticker() {
  const [items, setItems] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [footballRes, cricketRes] = await Promise.all([
          fetch(config.api.footballHomepage),
          fetch(config.api.cricketHomepage),
        ]);
        const all: { team1: string; team2: string; league?: string; league_name?: string }[] = [];
        if (footballRes.ok) {
          const data = await footballRes.json();
          const arr = data.matches || data || [];
          all.push(...arr);
        }
        if (cricketRes.ok) {
          const data = await cricketRes.json();
          const arr = data.matches || data || [];
          all.push(...arr);
        }
        const latest = all.slice(0, 3);
        setItems(
          latest.map((m) => `${m.team1} vs ${m.team2} — ${m.league || m.league_name || ''}`)
        );
      } catch {}
    };
    fetchMatches();
    const interval = setInterval(fetchMatches, 60000);
    return () => clearInterval(interval);
  }, []);

  if (items.length === 0) return null;

  const duplicated = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-label">LIVE</div>
      <div className="ticker-track">
        <div ref={contentRef} className="ticker-content">
          {duplicated.map((text, i) => (
            <span key={i} className="ticker-item">{text}</span>
          ))}
        </div>
      </div>
      <style>{`
        .ticker-wrap {
          display: flex;
          align-items: center;
          background: #ff0037;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          height: 36px;
          overflow: hidden;
        }
        .ticker-label {
          background: #fff;
          color: #ff0037;
          padding: 0 12px;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
        .ticker-track {
          flex: 1;
          overflow: hidden;
          position: relative;
          height: 100%;
        }
        .ticker-content {
          display: flex;
          white-space: nowrap;
          position: absolute;
          height: 100%;
          align-items: center;
          animation: ticker-scroll 30s linear infinite;
        }
        .ticker-item {
          padding: 0 24px;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
