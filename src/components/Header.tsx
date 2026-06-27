import { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space, Typography } from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  DownloadOutlined,
  SendOutlined,
  FireOutlined,
  TrophyOutlined,
  HomeOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const menuItems = [
  { key: '/', label: 'Home', icon: <HomeOutlined /> },
  {
    key: 'cricket',
    label: 'Cricket',
    icon: <TrophyOutlined />,
    children: [
      { key: '/category/cricket', label: 'All Cricket' },
      { key: '/category/t20-world-cup-2026', label: 'T20 World Cup 2026' },
      { key: '/category/ipl', label: 'IPL' },
      { key: '/category/playing-xi', label: 'Playing XI' },
    ],
  },
  {
    key: 'football',
    label: 'Football',
    icon: <FireOutlined />,
    children: [
      { key: '/category/football', label: 'All Football' },
      { key: '/category/premier-league', label: 'Premier League' },
      { key: '/category/champions-league', label: 'Champions League' },
      { key: '/category/laliga', label: 'La Liga' },
      { key: '/category/fifa-world-cup-2026', label: 'FIFA World Cup 2026' },
    ],
  },
  { key: '/blog', label: 'Blog', icon: <FileTextOutlined /> },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (info: { key: string }) => {
    window.location.href = info.key;
    setDrawerOpen(false);
  };

  return (
    <>
      <style>{`
        .yosin-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #fff;
          border-bottom: 2px solid #ff0037;
          transition: all 0.3s ease;
        }
        .yosin-header.scrolled {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .yosin-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          height: 64px;
        }
        .yosin-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .yosin-nav {
          display: none;
          flex: 1;
          margin-left: 40px;
        }
        .yosin-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .yosin-mobile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          color: #fff;
          font-size: 18px;
          transition: all 0.2s;
        }
        .yosin-mobile-btn:hover {
          background: rgba(255, 0, 55, 0.2);
          border-color: #ff0037;
        }
        .yosin-nav-desktop {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 4px;
        }
        .yosin-nav-desktop li {
          position: relative;
        }
        .yosin-nav-desktop a {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          color: #ccc;
          font-size: 14px;
          font-weight: 500;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .yosin-nav-desktop a:hover {
          color: #fff;
          background: rgba(255, 0, 55, 0.15);
        }
        .yosin-nav-desktop .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          padding: 8px;
          min-width: 200px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          z-index: 100;
        }
        .yosin-nav-desktop li:hover .dropdown-content {
          display: block;
        }
        .yosin-nav-desktop .dropdown-content a {
          padding: 10px 14px;
          border-radius: 4px;
        }
        .yosin-nav-desktop .dropdown-content a:hover {
          background: rgba(255, 0, 55, 0.2);
          color: #fff;
        }
        .yosin-nav-desktop .has-dropdown > a::after {
          content: '▾';
          margin-left: 4px;
          font-size: 10px;
        }
        .header-btn-apk {
          background: linear-gradient(135deg, #ff0037, #ff6b35) !important;
          border: none !important;
          color: #fff !important;
          font-weight: 600 !important;
          border-radius: 8px !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 0 16px !important;
        }
        .header-btn-apk:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .header-btn-telegram {
          background: #0088cc !important;
          border: none !important;
          color: #fff !important;
          border-radius: 8px !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 0 16px !important;
        }
        .header-btn-telegram:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .drawer-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #fff;
          font-size: 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .drawer-menu-item:hover {
          background: rgba(255, 0, 55, 0.15);
          color: #ff0037;
        }
        .drawer-submenu {
          padding-left: 24px;
        }
        .drawer-submenu .drawer-menu-item {
          font-size: 14px;
          padding: 10px 16px;
        }

        @media (min-width: 900px) {
          .yosin-nav {
            display: flex;
          }
          .yosin-mobile-btn {
            display: none;
          }
        }
      `}</style>

      <header className={`yosin-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="yosin-header-inner">
          <div className="yosin-logo" onClick={() => window.location.href = '/'}>
            <img src="https://www.yosintv.net/logo.png" alt="YoSinTV" style={{ height: 36, width: 'auto' }} />
          </div>

          <nav className="yosin-nav">
            <ul className="yosin-nav-desktop">
              {menuItems.map((item) => (
                <li key={item.key} className={'children' in item ? 'has-dropdown' : ''}>
                  <a href={item.key}>
                    {item.icon}
                    {item.label}
                  </a>
                  {'children' in item && (
                    <div className="dropdown-content">
                      {(item.children as Array<{ key: string; label: string }>).map((child) => (
                        <a key={child.key} href={child.key}>{child.label}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="yosin-actions">
            <Button
              className="header-btn-telegram"
              icon={<SendOutlined />}
              href="https://t.me/yosintvlive"
              target="_blank"
              size="small"
            >
              <span style={{ display: 'none' }}>Telegram</span>
            </Button>
            <Button
              className="header-btn-apk"
              icon={<DownloadOutlined />}
              href="https://www.yosintv.net/apk"
              target="_blank"
              size="small"
            >
              APK
            </Button>
            <button className="yosin-mobile-btn" onClick={() => setDrawerOpen(true)}>
              <MenuOutlined />
            </button>
          </div>
        </div>
      </header>

      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="https://www.yosintv.net/logo.png" alt="YoSinTV" style={{ height: 28, width: 'auto' }} />
          </div>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
        styles={{
          header: { background: '#0d0d0d', borderBottom: '1px solid #2a2a2a' },
          body: { background: '#0d0d0d', padding: 16 },
        }}
        closeIcon={<CloseOutlined style={{ color: '#fff' }} />}
      >
        <Space direction="vertical" style={{ width: '100%' }} size={4}>
          {menuItems.map((item) => (
            <div key={item.key}>
              <div className="drawer-menu-item" onClick={() => {
                if (!('children' in item)) {
                  window.location.href = item.key;
                  setDrawerOpen(false);
                }
              }}>
                {item.icon}
                {item.label}
              </div>
              {'children' in item && (
                <div className="drawer-submenu">
                  {(item.children as Array<{ key: string; label: string }>).map((child) => (
                    <div
                      key={child.key}
                      className="drawer-menu-item"
                      onClick={() => { window.location.href = child.key; setDrawerOpen(false); }}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ height: 16 }} />
          <Button
            className="header-btn-apk"
            icon={<DownloadOutlined />}
            href="https://www.yosintv.net/apk"
            target="_blank"
            block
          >
            Download APK
          </Button>
          <Button
            className="header-btn-telegram"
            icon={<SendOutlined />}
            href="https://t.me/yosintvlive"
            target="_blank"
            block
          >
            Join Telegram
          </Button>
        </Space>
      </Drawer>
    </>
  );
}
