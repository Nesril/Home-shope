import React from 'react'
import styles from '../styles/header.module.css'
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import{Menu,MenuButton,MenuList,MenuItem,IconButton} from "@chakra-ui/react"
import {FcMenu,FcHome,FcAbout} from "react-icons/fc"
import {BsSearch } from "react-icons/bs"
import {FiKey } from "react-icons/fi"
import Link from 'next/link';
export default function header() {
  return (
    <div className={styles.header}>
        <div className={styles.title}>
             <h1>  <Link href="/">Hawd Realstate</Link></h1>
        </div>
       <Menu>
          <MenuButton className={styles.menuButton} as={IconButton} icon={<FcMenu/>} variant="outlined" color={"red.400"}/>
          <MenuList>
             <Link href="/">
                <MenuItem icon={<FcHome/>}>Home</MenuItem>
             </Link>
             <Link href="/search">
                <MenuItem icon={<BsSearch/>}>Search</MenuItem>
             </Link>
             <Link href="/search?purpose=for-sale">
                <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
             </Link>
             <Link href="/search?purpose=for-rent">
                <MenuItem icon={<FiKey/>}>Sale Property</MenuItem>
             </Link>
          </MenuList>
       </Menu>
    </div>
  )
}
  