import Footer from "../../../components/Footer";
import AdminHeader from "../components/AdminHeader";

function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
      <Footer />
    </>
  );
}

export default AdminLayout;
