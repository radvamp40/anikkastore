export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} KidsWear. All rights reserved.
      </div>
    </footer>
  );
}
