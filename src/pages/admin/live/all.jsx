import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase';
import AdminLayout from '../../../assets/admin/AdminLayout'
import LiveTable from '../../../components/admin/live/LiveTable';

const All = () => {
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

  useEffect(() => {
    // checkAuthority();
    fetchDraft();
  }, []);

  return (
    <AdminLayout>
        {!data ? 
            <p>Loading...</p> : 
            data.map((event, i) => (
                <LiveTable event={event} index={i} key={i} />
            ))}
    </AdminLayout>
  )
}

export default All