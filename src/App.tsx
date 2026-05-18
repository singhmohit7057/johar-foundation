import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//  Top Header Component
import { TopHeader } from './shared/top-header';


// Shared Components
import { Navbar } from './shared/navbar';
import { Footer } from './shared/footer';

// UI Components
import { StickyDonateButton } from './components/sticky-donate-button';
import { ScrollToTop } from './components/scrolltotop';

// Popup
//import { Popup } from './popup/popup'; // Added Popup import

// Page Imports 
import HomePage from './pages/Homepage';
import WhoWeAre from './pages/whoweare';
import { GetInvolved } from './pages/getinvolved';
import Contact from './pages/contact';
import Donate from './pages/donate';


// Legal Imports
import PrivacyPolicy from './legal/privacy-policy';
import CookiesPolicy from './legal/cookies-policy';
import TermsAndCondition from './legal/terms-and-conditions';

// System Imports
import NotFound from './system/404-not-found';
import ComingSoon from './system/coming-soon';

const MainLayout = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      margin: 0, 
      padding: 0,
      width: '100%',
    
    }}>
      
      {/* The Popup will now trigger on any page within this layout
      <Popup delay={4000} /> */}
      
      <TopHeader />
      <ScrollToTop />
      <Navbar />
      
      <main style={{ flex: 1, width: '100%' }}>
        <Outlet />
      </main>

      <StickyDonateButton />
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
        element: <ComingSoon />,
      },
      {
        path: "impact",
        element: <ComingSoon />,
      },
      {
        path: "get-involved",
        element: <GetInvolved />, 
      },
      {
        path: "resources",
        element: <ComingSoon />, 
      },
      {
        path: "donate",
        element: <Donate />,
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
    path: "unsubscribe",
    element: <div style={{ padding: '100px', textAlign: 'center' }}>Unsubscribe Page</div>,
  },
  {
    path: "*",
    element: <NotFound />, 
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}