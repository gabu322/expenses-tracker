export default function ICaret({ className, color }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar" className={className}>
         <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.368 23.623a1.239 1.239 0 001.78 0L18.63 12.91a1.306 1.306 0 000-1.818L8.148.377a1.239 1.239 0 00-1.78 0 1.306 1.306 0 000 1.818L15.963 12l-9.595 9.805a1.306 1.306 0 000 1.818z"
            fill={color}
         />
      </svg>
   );
}
