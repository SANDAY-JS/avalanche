import React, { useState } from 'react'
import AdminLayout from '../../../assets/admin/AdminLayout'
import NewEventTable from '../../../components/admin/live/NewEventTable'
import styles from '../../../styles/pages/admin/live.module.scss'

const New = () => {
  const [authority, setAuthority] = useState(true);

  return (
    <AdminLayout>
        <div className={styles.adminLive}>
            {authority && <NewEventTable />}
        </div>
    </AdminLayout>
  )
}

export default New