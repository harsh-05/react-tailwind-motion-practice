import { easeInOut, motion} from 'motion/react'
export default function AnimatedButton() {
  return (
    <div className="perspective-distant transform-3d">
      <motion.button
        className="group relative px-12 py-4 bg-black text-gray-200 rounded-lg text-2xl subpixel-antialiased"
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -10,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{ duration: 0.3, ease: easeInOut }}
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-4/5 mx-auto "></span>
        <span className="absolute bottom-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent w-full blur-sm mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></span>
      </motion.button>
    </div>
  );
}