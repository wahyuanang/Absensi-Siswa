import { motion } from "framer-motion";
import images from "../assets/images/not-found.png";

function NotFoundPage() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8"
          >
            <img
              src={images}
              alt="404 Illustration"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Something's missing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"
          >
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </motion.p>

          <motion.a
            href="#"
            className="inline-flex text-gray-500 bg-gradient-to-tr font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all duration-700 ease-in-out border-2 border-gray-200 hover:bg-gradient-to-tl from-blue-400 to-blue-500 hover:text-white"
          >
            Back to Homepage
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;