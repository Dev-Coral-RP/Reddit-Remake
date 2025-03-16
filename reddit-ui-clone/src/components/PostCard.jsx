export default function PostCard({ post }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-gray-500 text-sm mb-2">r/{post.subreddit} • {post.time}</div>
        <h2 className="text-lg font-bold">{post.title}</h2>
        {post.image && <img src={post.image} alt="Post" className="w-full mt-2 rounded-md" />}
        <div className="flex justify-between text-gray-500 mt-2 text-sm">
          <span>⬆️ {post.upvotes}</span>
          <span>💬 {post.comments} Comments</span>
          <span>🔗 Share</span>
        </div>
      </div>
    );
  }
  