import { Carousel } from 'antd';
import type { WPPost } from '../lib/wordpress';
import { stripHtml } from '../lib/wordpress';

interface FeaturedPostsProps {
  posts: WPPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts.length) return null;

  return (
    <section class="featured-section">
      <style>{`
        .featured-section {
          margin-bottom: 0;
        }
        .featured-carousel .slick-slide > div {
          padding: 0 4px;
        }
        .featured-carousel .slick-list {
          margin: 0 -4px;
        }
        .featured-slide {
          position: relative;
          height: 360px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          display: block;
        }
        .featured-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .featured-slide:hover .featured-slide-img {
          transform: scale(1.05);
        }
        .featured-slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent 15%, rgba(0,0,0,0.95) 100%);
          padding: 50px 20px 20px;
        }
        .featured-slide-cat {
          display: inline-block;
          background: #ff0037;
          color: #fff;
          padding: 3px 12px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .featured-slide-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .featured-slide-excerpt {
          color: #aaa;
          font-size: 13px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .featured-slide { height: 240px; }
          .featured-slide-title { font-size: 16px; }
        }

        .ant-carousel .slick-dots li button {
          background: rgba(255,255,255,0.3);
          height: 4px;
          border-radius: 2px;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #ff0037;
        }
      `}</style>

      <Carousel
        autoplay
        autoplaySpeed={5000}
        className="featured-carousel"
      >
        {posts.slice(0, 5).map((post) => {
          const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const category = post._embedded?.['wp:term']?.[0]?.[0];
          const excerpt = stripHtml(post.excerpt.rendered);

          return (
            <a key={post.id} href={`/blog/${post.slug}`} class="featured-slide">
              {imageUrl ? (
                <img class="featured-slide-img" src={imageUrl} alt={post.title.rendered} loading="lazy" />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 56, color: '#333'
                }}>⚽</div>
              )}
              <div class="featured-slide-overlay">
                {category && <span class="featured-slide-cat">{category.name}</span>}
                <h2 class="featured-slide-title">{post.title.rendered}</h2>
                <p class="featured-slide-excerpt">{excerpt}</p>
              </div>
            </a>
          );
        })}
      </Carousel>
    </section>
  );
}
