import type { WPPost } from '../lib/wordpress';
import { stripHtml, truncateText, formatDate } from '../lib/wordpress';

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const title = post.title.rendered;
  const excerpt = stripHtml(post.excerpt.rendered);
  const date = formatDate(post.date);

  return (
    <article className="post-box">
      <style>{`
        .post-box {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .post-box:hover {
          border-color: #444;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .post-box-thumb {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        .post-box-thumb-placeholder {
          width: 100%;
          height: 180px;
          background: linear-gradient(135deg, #222, #333);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }
        .post-box-body {
          padding: 16px 18px 20px;
        }
        .post-box-cat {
          display: inline-block;
          background: #ff0037;
          color: #fff;
          padding: 2px 10px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .post-box-title {
          font-size: 16px;
          font-weight: 700;
          color: #eee;
          line-height: 1.4;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-box-title a {
          color: inherit;
        }
        .post-box-title a:hover {
          color: #ff0037;
        }
        .post-box-meta {
          font-size: 12px;
          color: #888;
          margin-bottom: 10px;
        }
        .post-box-meta span {
          margin-right: 12px;
        }
        .post-box-excerpt {
          font-size: 13px;
          color: #999;
          line-height: 1.6;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-box-readmore {
          display: inline-block;
          background: transparent;
          color: #ff0037;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid #ff0037;
          padding: 6px 16px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .post-box-readmore:hover {
          background: #ff0037;
          color: #fff;
        }
      `}</style>

      <a href={`/blog/${post.slug}`}>
        {imageUrl ? (
          <img className="post-box-thumb" src={imageUrl} alt={title} loading="lazy" />
        ) : (
          <div className="post-box-thumb-placeholder">⚽</div>
        )}
      </a>

      <div className="post-box-body">
        {category && <span className="post-box-cat">{category.name}</span>}
        <h3 className="post-box-title">
          <a href={`/blog/${post.slug}`}>{title}</a>
        </h3>
        <div className="post-box-meta">
          <span>{date}</span>
          <span>Admin</span>
        </div>
        <p className="post-box-excerpt">{truncateText(excerpt, 120)}</p>
        <a className="post-box-readmore" href={`/blog/${post.slug}`}>Read More</a>
      </div>
    </article>
  );
}
