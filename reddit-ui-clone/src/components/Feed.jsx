import PostCard from "./PostCard";

const dummyPosts = [
  { id: 1, subreddit: "reactjs", title: "React is amazing!", upvotes: 230, comments: 40, time: "7h ago" },
  { id: 2, subreddit: "webdev", title: "Best frontend framework?", upvotes: 190, comments: 32, time: "3h ago" },
  { id: 3, subreddit: "gaming", title: "Elden Ring DLC announced!", upvotes: 420, comments: 98, time: "2h ago" },
  { id: 4, subreddit: "movies", title: "Best sci-fi movies of all time?", upvotes: 350, comments: 75, time: "1h ago" },
  { id: 5, subreddit: "technology", title: "Apple's new M3 chip is insane!", upvotes: 290, comments: 50, time: "5h ago" },
  { id: 6, subreddit: "programming", title: "Why is JavaScript weird?", upvotes: 120, comments: 45, time: "6h ago" },
  { id: 7, subreddit: "funny", title: "This meme had me rolling 😂", upvotes: 500, comments: 110, time: "3h ago" },
  { id: 8, subreddit: "askreddit", title: "What’s your best life hack?", upvotes: 270, comments: 62, time: "4h ago" },
];

export default function Feed() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {dummyPosts.map(post => (
        <div key={post.id} className="max-w-md w-full">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
