import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="top-0 z-50  bg-bg-primary relative lg:sticky">
      <div className="lg:mx-auto py-4">
        <MobileMenu />
        <Navigation />
      </div>
    </header>
  );
};
