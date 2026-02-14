import Link from "next/link";

const dummyCategories = [
  { name: "Boys", image: "👦" },
  { name: "Girls", image: "👧" },
  { name: "Newborns", image: "👶" },
];

const dummyProducts = [
  { name: "Blue Shirt", image: "👔", price: "$15" },
  { name: "Red Dress", image: "👗", price: "$20" },
  { name: "Baby Romper", image: "👶", price: "$12" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-32 flex flex-col items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to KidsWear
        </h1>
        {/* <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Discover the best multi-vendor clothing for your kids. Stylish,
          comfortable, and affordable!
        </p>
        <Link
          href="/shop"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Shop Now
        </Link> */}
      </section>

      {/* Categories Section */}
      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {dummyCategories.map((cat) => (
            <div
              key={cat.name}
              className="relative rounded-lg overflow-hidden shadow hover:scale-105 transform transition"
            >
              <div className="text-4xl mb-4 bg-amber-400">{cat.image}</div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-xl font-semibold p-4 text-center">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {dummyProducts.map((prod) => (
            <div
              key={prod.name}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{prod.image}</div>
              <h3 className="font-semibold text-lg">{prod.name}</h3>
              <p className="text-gray-700">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 text-white py-20 flex flex-col items-center text-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to find the perfect outfit?
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Join thousands of happy parents shopping for their kids with ease.
        </p>
        <Link
          href="/signup"
          className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
}
