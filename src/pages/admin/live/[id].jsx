import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../../../firebase'
import AdminLayout from '../../../assets/admin/AdminLayout'
import EditTable from '../../../components/admin/live/EditTable'
import styles from "../../../styles/pages/admin/live.module.scss";

const UpdateEvent = () => {
  const [data, setData] = useState(null)
  const router = useRouter()
  const {id} = router.query;

  const fetchDraft = async () => {
    // firebaseからデータを取得
    const isProduction = process.env.NODE_ENV === "production";
    await db.collection(isProduction ? "live_info" : "draft").get()
          .then(querySnapshot => {
            querySnapshot.docs.forEach((doc, i) => {
              if(i === Number(id)) {
                setData(doc.data());
                console.log(doc.data())
              }
          })});
  };

  useEffect(() => {
    // checkAuthority();
    if(id === undefined) return;
    fetchDraft();
  }, [id]);

  return (
    <AdminLayout>
      {data && 
        <div className={styles.adminLive}>
          <EditTable event={data} />
        </div>}
    </AdminLayout>
  )
}

export default UpdateEvent