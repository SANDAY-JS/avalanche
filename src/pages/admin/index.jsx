import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminLayout from "../../assets/admin/AdminLayout";
import { useAuth } from "../../assets/StateProvider";
import CurrentEvents from "../../components/admin/CurrentEvents";
import styles from "../../styles/pages/admin/index.module.scss";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authority, setAuthority] = useState(false);

  const { currentUser } = useAuth();
  const router = useRouter()

  const checkAuthority = () => {
    if (!currentUser){
      setIsLoading(true)
      setAuthority(false)
      return router.push('/')
    };

    if (currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
      setIsLoading(false)
      return setAuthority(true);
    }
  };

  useEffect(() => {
    checkAuthority();
  }, []);

  if(isLoading){
    return (<p>loading...</p>)
  }

  return (
    <AdminLayout>
      {authority && (
        <div className={styles.adminContainer}>
          <CurrentEvents />
        </div>
      )}
    </AdminLayout>
  );
};

export default index;
