export default function Footer() {
  return (
    <footer className="max-w-[768px] mx-auto px-4 mt-16">
      <div className=" border-t py-6 border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} @JeanLeles.
      </div>
    </footer>
  );
}
