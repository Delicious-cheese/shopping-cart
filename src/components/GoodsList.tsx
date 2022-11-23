import { Routes, Route, Navigate } from 'react-router-dom'
import Clothes from './Clothes'
import Electronic from './Electronic'
import Gift from './Gift'
import NoMatch from './NoMatch'
import styles from '../styles/GoodList.module.css'

const GoodsList = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Navigate to='/clothes' />}></Route>
                <Route path='/clothes' element={<Clothes />}></Route>
                <Route path='/electronic' element={<Electronic />}></Route>
                <Route path='/gift' element={<Gift />}></Route>
                <Route path='*' element={<NoMatch />}></Route>
            </Routes>
        </div >
    )
}

export default GoodsList