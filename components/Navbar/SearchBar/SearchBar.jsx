import { useRef } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
        console.log('ref')
    }

    return (
        <>
            <div className={styles.searchBar} onClick={handleClick}>
                <input className={styles.searchInput} type="search" placeholder="Aloita etsiminen tästä" />
                <div className={styles.searchIcon}>
                    <SearchIcon />
                </div>
            </div>
        </>
    )
}

export default SearchBar;