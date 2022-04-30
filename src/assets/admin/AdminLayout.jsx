import Footer from "../../components/Footer";
import AdminHeader from "../../components/admin/AdminHeader";

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
