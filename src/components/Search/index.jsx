import React, { useContext, useEffect, useRef } from 'react';
import styles from './search.module.scss';

import { X } from 'lucide-react';
import { searchContext } from '../../App';

const Search = () => {

  const [searchValue, setSearchValue] = useContext(searchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  }
  
  return (
    <div className={styles.root}>
        <input value={searchValue} 
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)} 
        className={styles.input} 
        placeholder='Поиск пиццы...'/>

        { searchValue &&
        <X onClick={onClickClear} className={styles.X}></X>
        }
    </div>
  )
};

export default Search;
