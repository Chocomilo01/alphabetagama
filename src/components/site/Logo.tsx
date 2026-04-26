// export function Logo({ className = "" }: { className?: string }) {
//   return (
//     <div className={`flex items-center gap-2.5 ${className}`}>
//       <div className="relative h-11 w-11 shrink-0">
//         <div className="absolute inset-0 rounded-lg bg-gradient-gold shadow-gold" />
//         <div className="absolute inset-[2px] rounded-[6px] bg-navy-deep flex items-center justify-center">
//           <span className="font-serif font-bold text-lg leading-none text-gold-shimmer">E&R</span>
//         </div>
//       </div>
//       <div className="leading-tight">
//         <div className="font-serif font-bold text-[15px] tracking-tight text-foreground"> GLOBAL</div>
//         <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Resources Ltd</div>
//       </div>
//     </div>
//   );
// }


import logo from "@/assets/logo3.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="E&R Global Resources Ltd"
      className={`h-10 sm:h-12 md:h-14 w-auto object-contain ${className}`}
    />
  );
}