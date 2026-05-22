import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Top Header Component
import { TopHeader } from "./shared/top-header";

// Shared Components
import { Navbar } from "./shared/navbar";
import { Footer } from "./shared/footer";

// UI Components
import { ScrollToTop } from "./router/scrolltotop";

// Floating Components
import { StickyDonateButton } from "./floating/sticky-donate-button";
import { BackToTop } from "./floating/backtotop";
import { WhatsAppButton } from "./floating/whatsapp-button";

// Popup
// import { Popup } from './popup/popup'; // Ready whenever you choose to uncomment

// Page Imports
import HomePage from "./pages/Homepage";
import WhoWeAre from "./pages/Whoweare";
import Initiatives from "./pages/Initiatives";
import Impact from "./pages/Impact";
import { GetInvolved } from "./pages/Getinvolved";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

// Legal Imports
import PrivacyPolicy from "./legal/privacy-policy";
import CookiesPolicy from "./legal/cookies-policy";
import TermsAndCondition from "./legal/terms-and-conditions";

// System Imports
import NotFound from "./system/404-not-found";
import ComingSoon from "./system/coming-soon";
import Unsubscribe from "./subscribe/unsubscribe";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      {/* The Popup will trigger on any page within this layout once uncommented
      <Popup delay={4000} /> */}

      <TopHeader />
      <ScrollToTop />
      <Navbar />

      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </main>

      <BackToTop />
      <StickyDonateButton />
      <WhatsAppButton/>
      <Footer />
    </div>
  );
};

/**
 * Router Configuration
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "initiatives",
        element: <Initiatives />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
      {
        path: "get-involved",
        element: <GetInvolved />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "donate",
        element: <Donate />,
      },

      // UnSubscribe Routes
      {
        path: "unsubscribe",
        element: <Unsubscribe />,
      },

      // Coming Soon Routes
      {
        path: "founder",
        element: <ComingSoon />,
      },

      // Legal Routes
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cookies-policy",
        element: <CookiesPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndCondition />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
