import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ children, size, shape, onClick }) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;