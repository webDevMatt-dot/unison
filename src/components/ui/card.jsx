export function Card({ children, className = '' }) {
  return (
    <div
      className={`border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
