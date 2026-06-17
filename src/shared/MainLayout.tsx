import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/navbar";
import { Footer } from "../shared/footer";
import { StickyDonateButton } from "../floating/sticky-donate-button";
import { ScrollToTop } from "../router/scrolltotop";

export const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet /> {/* This is where your pages will render */}
      </main>
      <StickyDonateButton />
      <Footer />
    </>
  );
};
