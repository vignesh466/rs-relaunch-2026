# Enhanced Strapi Integration

This project now includes comprehensive support for Strapi CMS content, including rich text, media assets, and structured content blocks.

## Features

### 📝 Rich Text Support

- **ProseMirror/TipTap content**: Automatically converts Strapi's rich text editor output to HTML
- **Formatted text**: Bold, italic, code, links with proper styling
- **Structured content**: Headings, lists (ordered/unordered), blockquotes
- **Embedded media**: Images with captions and alternative text

### 🖼️ Media Management

- **Smart URL handling**: Automatically handles both relative and absolute media URLs
- **Image optimization**: Responsive images with proper alt text and captions
- **Fallback handling**: Graceful fallback to placeholder images for missing media
- **Multiple formats**: Support for various media types and formats

### 🧩 Content Blocks

The system supports various Strapi content block types:

- **`shared.rich-text`**: Rich text content with full formatting
- **`shared.media`**: Media blocks with images and captions
- **`shared.quote`**: Styled blockquotes with author attribution
- **`shared.slider`**: Image galleries and carousels
- **Custom blocks**: Extensible system for new content types

### 🔧 Enhanced API Integration

- **Deep population**: Fetches all related content (media, authors, categories, tags)
- **Optimized queries**: Efficient data fetching with proper relationships
- **Error handling**: Robust error handling and fallbacks
- **Type safety**: TypeScript interfaces for better development experience

## Setup

1. **Copy environment variables**:

   ```bash
   cp .env.example .env
   ```

2. **Update your Strapi configuration**:

   ```env
   VITE_STRAPI_URL=https://your-strapi-instance.com
   VITE_STRAPI_TOKEN=your-api-token-here
   ```

3. **Strapi Content Type Structure**:
   Your Strapi `article` content type should include:
   ```json
   {
     "title": "Text",
     "description": "Text (Long)",
     "content": "Rich Text",
     "cover": "Media (Single)",
     "blocks": "Dynamic Zone",
     "author": "Relation to User",
     "category": "Relation to Category",
     "tags": "Relation to Tags (Many)",
     "publishedAt": "DateTime"
   }
   ```

## Usage Examples

### Basic Blog Post

```typescript
import { getPost, getMediaUrl, processRichText } from "../lib/strapi";

const post = await getPost("my-blog-slug");
const coverImage = getMediaUrl(post.cover);
const htmlContent = processRichText(post.content);
```

### Rendering Content Blocks

```jsx
{
  post.blocks?.map((block, index) => (
    <div key={index}>{renderBlock(block, index)}</div>
  ));
}
```

## Content Block Examples

### Rich Text Block

```json
{
  "__component": "shared.rich-text",
  "content": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "This is a paragraph with ",
            "marks": []
          },
          {
            "type": "text",
            "text": "bold text",
            "marks": [{ "type": "bold" }]
          }
        ]
      }
    ]
  }
}
```

### Media Block

```json
{
  "__component": "shared.media",
  "file": {
    "url": "/uploads/image.jpg",
    "alternativeText": "Description",
    "caption": "Image caption"
  }
}
```

### Quote Block

```json
{
  "__component": "shared.quote",
  "content": "An inspiring quote about agriculture",
  "author": "Farmer Name"
}
```

## File Structure

```
src/
├── lib/
│   └── strapi.ts              # Enhanced Strapi API client
├── pages/
│   ├── Blogs.jsx              # Blog listing with enhanced media
│   └── BlogPost.jsx           # Individual post with rich content
└── components/
    └── Who we serve/
        └── ImpactStories.jsx  # Combined blog/stories view
```

## API Functions

### `getPosts(page, pageSize)`

Fetches paginated blog posts with full population of related content.

### `getPost(slug)`

Fetches a single blog post by documentId with all related data.

### `getMediaUrl(media)`

Converts Strapi media objects to full URLs, handling both relative and absolute paths.

### `processRichText(content)`

Converts Strapi's rich text content to HTML with proper styling and structure.

## Styling

The enhanced blog pages include:

- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Smooth animations**: Framer Motion animations for better UX
- **Consistent theming**: Uses project color constants
- **Accessible markup**: Proper heading structure and alt text
- **Typography**: Beautiful typography with proper spacing

## Testing

Start the development server:

```bash
npm run dev
```

Visit the blog pages:

- Blog listing: `http://localhost:5174/strapi_blog`
- Individual posts: `http://localhost:5174/blogs/[documentId]`
- Impact stories: `http://localhost:5174/whoweserve`

## Troubleshooting

1. **Images not loading**: Check `VITE_STRAPI_URL` environment variable
2. **API errors**: Verify `VITE_STRAPI_TOKEN` has proper permissions
3. **Content not rendering**: Check Strapi content type structure matches expected schema
4. **Rich text issues**: Ensure Strapi is using compatible rich text editor (TipTap/ProseMirror)

## Future Enhancements

- **SEO optimization**: Meta tags and structured data
- **Search functionality**: Client-side search across blog content
- **Categories and tags**: Enhanced filtering and navigation
- **Comments system**: Integration with comment providers
- **Social sharing**: Share buttons for blog posts
