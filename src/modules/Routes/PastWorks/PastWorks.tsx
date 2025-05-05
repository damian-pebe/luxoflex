import { useScrollToTop } from "@/hooks/scrollToTop";
import { Materials } from "./Products/Materials/Materials";
import Products from "./Products/Products";

export default function PastWorks() {
  useScrollToTop();
  return (
    <div className="container py-5 overflow-hidden">
      <Materials />
      <Products />
    </div>
  );
}
