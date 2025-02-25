import { useState } from "react";

const Comments = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full min-h-[80px] p-2 border rounded resize-none"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 border rounded hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
          disabled={!newComment.trim()}
        >
          Add Comment
        </button>
      </form>

      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="p-3 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
