import { useScrollToTop } from "@/hooks/scrollToTop";
import { Materials } from "./Products/Materials/Materials";
import Products from "./Products/Products";

export default function PastWorks() {
  useScrollToTop();
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Materials />
      <Products />
    </main>
  );
}
