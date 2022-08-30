import { useRouter } from 'next/router'
import React from 'react'
import {IoArrowBackCircleOutline} from 'react-icons/io5'

const BackButton = () => {
    const router = useRouter()
    const currentPath = router.pathname;

    const handleClick = () => {
        const newUrl = '';

        const pathArr = currentPath.split('/');
        pathArr.pop();
        pathArr.forEach(str => newUrl+=`${str}/`)

        router.push(newUrl)
    }

  return (
    <div onClick={handleClick} style={{position: 'absolute', top: '50%', left: '0', transform:'translateY(-50%)', fontSize: '3rem', paddingTop: '8px', zIndex: '100'}}>
        <IoArrowBackCircleOutline />
    </div>
  )
}

export default BackButton