import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase';
import AdminLayout from '../../../assets/admin/AdminLayout'
import LiveTable from '../../../components/admin/live/LiveTable';

const All = () => {
  const [data, setData] = useState([]);

  const fetchDraft = async () => {
    // firebaseからデータを取得
    await db.collection("draft").get()
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