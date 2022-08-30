import { useEffect, useState } from "react";
import { useAuth } from "../../../assets/StateProvider";
import { useRouter } from "next/router";
import AdminLayout from "../../../assets/admin/AdminLayout";
import Link from "next/link";
import { db } from "../../../../firebase";
import LiveTable from "../../../components/admin/live/LiveTable";

const adminLive = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [securityCount, setSecurityCount] = useState(0);
  const [authority, setAuthority] = useState(false);

  const [data, setData] = useState([]);

  const fetchDraft = async () => {
    // firebaseからデータを取得
    const isProduction = process.env.NODE_ENV === "production";
    await db.collection(isProduction ? "live_info" : "draft").get()
          .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
            const newData = data;
            newData.push(doc.data())
            setData([...newData]);
          })});
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

  useEffect(() => {
    checkAuthority();
    fetchDraft();
  }, []);

  if(!authority) {
    return (<AdminLayout></AdminLayout>)
  }

  return (
    <AdminLayout>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', fontSize: '2rem', padding: '3rem 0'}}>
        <Link href={'/admin/live/new'}>
          <a style={{textDecoration: 'underline'}}>ライブ情報を追加</a>
        </Link>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem'}}>
          {!data ? 
              <p>Loading...</p> : 
              data.map((event, i) => (
                  <LiveTable event={event} index={i} key={i} />
              ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default adminLive;
