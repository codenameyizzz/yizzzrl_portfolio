export default function ArticleBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'h2') {
      return <h2 key={`${block.type}-${index}`}>{block.content}</h2>;
    }

    if (block.type === 'quote') {
      return <blockquote className="article-quote" key={`${block.type}-${index}`}>{block.content}</blockquote>;
    }

    if (block.type === 'lead') {
      return (
        <div className="article-lead-card" key={`${block.type}-${index}`}>
          <p className="article-lead-label">{block.label}</p>
          <p>{block.content}</p>
        </div>
      );
    }

    return <p key={`${block.type}-${index}`}>{block.content}</p>;
  });
}
