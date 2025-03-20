import React, { useContext } from 'react';
import styles from './search.module.scss';

import { X } from 'lucide-react';
import { searchContext } from '../../App';

const Search = () => {

  const [searchValue, setSearchValue] = useContext(searchContext);
  
  return (
    <div className={styles.root}>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder='Поиск пиццы...'/>

        { searchValue &&
        <X onClick={()=> setSearchValue('')} className={styles.X}></X>
        }
    </div>
  )
};

export default Search;
