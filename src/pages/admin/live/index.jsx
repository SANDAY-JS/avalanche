import { useState } from "react";
import { useAuth } from "../../../assets/StateProvider";
import { useRouter } from "next/router";
import AdminLayout from "../../../assets/admin/AdminLayout";
import Link from "next/link";

const adminLive = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [securityCount, setSecurityCount] = useState(0);
  const [authority, setAuthority] = useState(false);
  
  const checkSecurity = () => {
    if (securityCount < 3) return;

    return router.push("/");
  };

  const checkAuthority = () => {
    if (!currentUser) return requirePassword();

    if (currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
      return setAuthority(true);
    }
  };

  const requirePassword = () => {
    setSecurityCount(securityCount + 1);

    const password = prompt("パスワードを入力して下さい");
    // cancel ボタン
    if (password === null) return router.push("/");

    // パスワードが違うとき
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
      return requirePassword();

    // pasword correct
    return setAuthority(true);
  };

  // useEffect(() => {
  //   console.log("securityCount", securityCount);
  //   checkSecurity();
  // }, [securityCount]);

  return (
    <AdminLayout>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', fontSize: '2rem', padding: '3rem 0'}}>
        <Link href={'/admin/live/new'}>
          <a>ライブ情報を追加</a>
        </Link>
        <Link href={'/admin/live/all'}>
          <a>ライブ情報を編集する</a>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default adminLive;
