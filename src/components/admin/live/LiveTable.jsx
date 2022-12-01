import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useAuth } from '../../../assets/StateProvider';

const LiveTable = ({event, index}) => {
  const { deleteEvent } = useAuth()
  const router = useRouter()

  const handleDeleteEvent = async () => {
    const check = confirm('このライブ情報を削除しますか？')
    if(!check) return;

    try {
      await deleteEvent(event)
      router.reload();
      console.log('successfully deleted')
    } catch (error) {
      console.error(error);
      alert('削除に失敗しました。')
    }
  }

  return (
    <div style={{width: '100%', fontSize: '1.4rem'}}>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginRight: '5rem', marginBottom: '.5rem'}}>
            <Link href={`/admin/live/${index}`}>編集</Link>
            <Link href={'#'}><a onClick={handleDeleteEvent}>削除</a></Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid black', fontSize: '1.2rem', width: '80%', margin: '0 auto 3rem auto', padding: '1rem 2rem'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>場所</span>
                <p style={{flex: 1, }}>{event?.place ?? ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>日時</span>
                <p style={{flex: 1, }}>{event?.date ?? ''} {event?.time ?? ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>詳細</span>
                <p style={{flex: 1, }}>{event?.detail ? event.detail.split('<br>')?.join('\n') : ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>コメント</span>
                <p style={{flex: 1, }}>{event?.comment ? event.comment.split('<br>')?.join('\n') : ''}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveTable