export default function Skeleton({ className = "", ...props }) {
   return <div className={`bg-slate-300 animate-pulse rounded ${className}`} {...props} />;
}
