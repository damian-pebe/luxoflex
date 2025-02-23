export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    icon: JSX.Element;
    image: string;
  }

  export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
  }
  