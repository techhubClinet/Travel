import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import SmoothScrollRootIO from './SmoothScrollRootIO';

export default function Layout() {
  return (
    <>
      <Header />
      <SmoothScrollRootIO>
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </SmoothScrollRootIO>
    </>
  );
}
