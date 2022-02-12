import { useEffect, useState } from "react";
import AdminLayout from "./assets/AdminLayout";
import CurrentEvents from "./components/CurrentEvents";
import styles from "../../styles/pages/admin/index.module.scss";

const index = () => {
  const [authority, setAuthority] = useState(true);

  const checkAuthority = () => {
    // if (!currentUser) return requirePassword();
    // if (currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
    //   return setAuthority(true);
    // }
  };

  useEffect(() => {
    checkAuthority();
  }, []);

  return (
    <AdminLayout>
      {authority && (
        <>
          <div className={styles.adminContainer}>
            <CurrentEvents />
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default index;
