import { useState } from "react";
import Comments from "./Comments";

const Post = ({ post, onLike, onRepost, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const PostActions = ({
    likes,
    comments,
    reposts,
    isLiked,
    isReposted,
    onLike,
    onComment,
    onRepost,
  }) => {
    return (
      <div className="flex items-center gap-6 mt-4">
        <button
          onClick={onLike}
          className={`flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all ${
            isLiked ? "text-red-500" : ""
          }`}
        >
          ❤️ <span className="text-sm">{likes}</span>
        </button>
  
        <button
          onClick={onComment}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-all"
        >
          💬 <span className="text-sm">{comments}</span>
        </button>
  
        <button
          onClick={onRepost}
          className={`flex items-center gap-2 text-gray-600 hover:text-green-500 transition-all ${
            isReposted ? "text-green-500" : ""
          }`}
        >
          🔄 <span className="text-sm">{reposts}</span>
        </button>
      </div>
    );
  };
  

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-4 transition-all hover:shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-medium">{post.author}</span>
        <span className="text-sm text-gray-500">{post.timestamp}</span>
      </div>
      
      <p className="text-gray-800 mb-4">{post.content}</p>
      
      <PostActions
        likes={post.likes}
        comments={post.comments.length}
        reposts={post.reposts}
        isLiked={post.isLiked || false}
        isReposted={post.isReposted || false}
        onLike={() => onLike(post.id)}
        onComment={() => setShowComments(!showComments)}
        onRepost={() => onRepost(post.id)}
      />
      
      {showComments && (
        <Comments
          comments={post.comments}
          onAddComment={(content) => onComment(post.id, content)}
        />
      )}
    </div>
  );
};

export default Post;
