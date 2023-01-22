import React from 'react'
import { Card } from '../Card'
import styles from './index.module.css'

export const List = () => {
  
  return (
    <div className={styles.list}>
        <Card subtitle='фуа-гра' quantity='10' subSelect='Печень утки разварная с артишоками.' gift='мышь' weight='0,5' />
        <Card subtitle='рыбой' quantity='40' subSelect='Головы щучьи с чесноком да свежайшая сёмгушка.' gift='2 мыши' weight='2'/>
        <Card disabled='disabled' subtitle='курой' quantity='100' gift='5 мышей' weight='5'/>
    </div>
  )
}
