import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 capitalize">{title}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          User {userId}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
};

export default PostCard;