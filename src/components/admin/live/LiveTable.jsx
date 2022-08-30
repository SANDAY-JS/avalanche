import Link from 'next/link';
import React from 'react'

const LiveTable = ({event, index}) => {
    const deleteEvent = () => {
        
    }

  return (
    <>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginRight: '5rem', marginTop: '3rem', marginBottom: '1rem'}}>
            <Link href={`/admin/live/${index}`}>編集</Link>
            <Link href={'/delete'}><a onClick={deleteEvent}>削除</a></Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid black', fontSize: '1.2rem', width: '80%', margin: '0 auto 3rem auto', padding: '1rem 2rem'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>イベント名</span>
                <p style={{flex: 1, fontWeight: '800'}}>{event?.eventName ?? ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>日時</span>
                <p style={{flex: 1, }}>{event?.date ?? ''} {event?.time ?? ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>場所</span>
                <p style={{flex: 1, }}>{event?.place ?? ''}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <span style={{width: '80px', borderRight: '1px solid black'}}>詳細</span>
                <p style={{flex: 1, }}>{event?.detail ?? ''}</p>
            </div>
        </div>
    </>
  )
}

export default LiveTable