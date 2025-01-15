import bgImageNavBar from "@/assets/crochet7.jpg";

export default function BgNavBar() {
  return (
    <div className="h-2 sm:h-10 md:h-24 shadow-md hidden sm:block">
      <img
        src={bgImageNavBar}
        alt="Crochet Art"
        className="w-full h-full object-center md:object-cover"
      />
    </div>
  );
}
