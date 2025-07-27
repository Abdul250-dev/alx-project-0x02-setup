import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{name}</h3>
      <div className="space-y-2 text-gray-600">
        <p><span className="font-medium">Email:</span> {email}</p>
        <p><span className="font-medium">Phone:</span> {phone}</p>
        <p><span className="font-medium">Website:</span> {website}</p>
        <div>
          <span className="font-medium">Address:</span>
          <p className="ml-4">{address.street}</p>
          <p className="ml-4">{address.city}, {address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;