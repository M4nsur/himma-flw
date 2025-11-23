import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary">
      <div className="lg:mx-auto lg:py-4">
        <MobileMenu />
        <Navigation />
      </div>
    </header>
  );
};
