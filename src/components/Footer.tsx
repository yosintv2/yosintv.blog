import { Typography, Space } from 'antd';
import {
  SendOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const { Text, Title, Link } = Typography;

export default function Footer() {
  return (
    <>
      <style>{`
        .yosin-footer {
          background: linear-gradient(180deg, #0d0d0d 0%, #050505 100%);
          border-top: 2px solid #1a1a1a;
          padding-top: 60px;
        }
        .yosin-footer-top {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px 40px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .yosin-footer-brand {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }
        .yosin-footer-brand span {
          color: #ff0037;
        }
        .yosin-footer-desc {
          color: #888;
          font-size: 14px;
          line-height: 1.7;
          max-width: 360px;
        }
        .yosin-footer h4 {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .yosin-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .yosin-footer-links li {
          margin-bottom: 10px;
        }
        .yosin-footer-links a {
          color: #888;
          font-size: 14px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .yosin-footer-links a:hover {
          color: #ff0037;
          padding-left: 4px;
        }
        .yosin-footer-social {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        .yosin-footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 18px;
          transition: all 0.3s;
        }
        .yosin-footer-social a:hover {
          background: rgba(255, 0, 55, 0.2);
          border-color: #ff0037;
          color: #ff0037;
          transform: translateY(-2px);
        }
        .yosin-footer-bottom {
          border-top: 1px solid #1a1a1a;
          padding: 20px 16px;
          text-align: center;
        }
        .yosin-footer-bottom-text {
          color: #666;
          font-size: 13px;
        }
        .yosin-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 0, 55, 0.1);
          border: 1px solid rgba(255, 0, 55, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          color: #ff0037;
          font-size: 12px;
          font-weight: 600;
          margin-top: 12px;
        }

        @media (min-width: 768px) {
          .yosin-footer-top {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
      `}</style>

      <footer className="yosin-footer">
        <div className="yosin-footer-top">
          <div>
            <div className="yosin-footer-brand">YoSin<span>TV</span></div>
            <p className="yosin-footer-desc">
              YoSinTV is a sports website that covers all Cricket Matches, World Cup,
              International/Domestic Matches, Football Matches, and more.
              Stay updated with live scores, match previews, playing XI, and expert analysis.
            </p>
            <div className="yosin-footer-badge">
              <span className="live-dot" />
              Live Sports Coverage
            </div>
            <div className="yosin-footer-social">
              <a href="https://t.me/yosintvlive" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <SendOutlined />
              </a>
              <a href="https://twitter.com/yosintv" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterOutlined />
              </a>
              <a href="https://facebook.com/yosintv.official" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookOutlined />
              </a>
              <a href="https://instagram.com/yosintv.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramOutlined />
              </a>
              <a href="https://www.yosintv.net/apk" target="_blank" rel="noopener noreferrer" aria-label="Download APK">
                <DownloadOutlined />
              </a>
            </div>
          </div>

          <div>
            <h4>Cricket</h4>
            <ul className="yosin-footer-links">
              <li><a href="/category/cricket">All Cricket</a></li>
              <li><a href="/category/t20-world-cup-2026">T20 World Cup 2026</a></li>
              <li><a href="/category/ipl">IPL</a></li>
              <li><a href="/category/playing-xi">Playing XI</a></li>
            </ul>
          </div>

          <div>
            <h4>Football</h4>
            <ul className="yosin-footer-links">
              <li><a href="/category/football">All Football</a></li>
              <li><a href="/category/premier-league">Premier League</a></li>
              <li><a href="/category/champions-league">Champions League</a></li>
              <li><a href="/category/laliga">La Liga</a></li>
              <li><a href="/category/fifa-world-cup-2026">FIFA World Cup 2026</a></li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="yosin-footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="https://www.yosintv.net/apk">Download APK</a></li>
              <li><a href="https://t.me/yosintvlive">Telegram Channel</a></li>
              <li><a href="https://www.yosin-tv.net/contact-us">Contact Us</a></li>
              <li><a href="https://www.yosin-tv.net/dmca">DMCA</a></li>
            </ul>
          </div>
        </div>

        <div className="yosin-footer-bottom">
          <Text className="yosin-footer-bottom-text">
            &copy; {new Date().getFullYear()} <strong>YoSinTV</strong>. All rights reserved.
            YoSinTV does not host any media content on its servers.
            All streams are embedded from third-party sources.
          </Text>
        </div>
      </footer>
    </>
  );
}
