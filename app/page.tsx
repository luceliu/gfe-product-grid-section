import ProductGridSection from "./components/ProductGridSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] min-h-screen flex">
      <div className="bg-white m-4 w-screen rounded">
        <ProductGridSection />
      </div>
    </div>
  );
}
