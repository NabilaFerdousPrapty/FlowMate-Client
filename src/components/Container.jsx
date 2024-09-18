// eslint-disable-next-line react/prop-types
export default function Container({ children, className = "", ...props }) {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
