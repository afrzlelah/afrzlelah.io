export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Your Site</div>
        <div className="flex gap-4">
          <a className="text-gray-300 hover:text-white" href="#">
            Link 1
          </a>
          <a className="text-gray-300 hover:text-white" href="#">
            Link 2
          </a>
          <a className="text-gray-300 hover:text-white" href="#">
            Link 3
          </a>
        </div>
      </div>
    </footer>
  );
}
