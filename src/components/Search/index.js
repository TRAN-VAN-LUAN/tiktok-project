import { useEffect, useState, useRef } from 'react';
import { faMagnifyingGlass, faSpinner, faXmark, faClock } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import searchApi from '~/apiService/searchService';
import { useDeBounce } from '~/hooks';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Xmark } from '../Icons';
import { AccountItem } from '../Account';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showMenu, setShowMenu] = useState(true);
    const [load, setLoad] = useState(false);

    const searchRef = useRef();

    const deBounced = useDeBounce(searchValue, 500);

    useEffect(() => {
        if (!deBounced.trim()) {
            return;
        }
        setLoad(false);
        const fecthApi = async () => {
            setLoad(true);
            const res = await searchApi(deBounced);
            setSearchResult(res);
            setLoad(false);
        };

        fecthApi();
    }, [deBounced]);

    const handleClear = () => {
        searchRef.current.focus();
        setSearchValue('');
    };

    const handleValue = (value) => {
        setSearchValue(value);
        setLoad(true);
    };

    return (
        <TippyHeadless
            interactive
            visible={searchResult.length > 0 && showMenu}
            onClickOutside={() => setShowMenu(false)}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <div className={cx('search-wrapper')}>
                            <ul className={cx('search-list')}>
                                <div className={cx('search-name')}>Tìm kiếm gần đây</div>
                                <div className={cx('search-name')}>Bạn có thể thích</div>
                                {searchResult.map((value) => (
                                    <AccountItem data={value} key={value.id} />
                                ))}
                            </ul>
                        </div>
                    </PropperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    onChange={(e) => handleValue(e.target.value)}
                    onClick={() => setShowMenu(true)}
                ></input>
                {!!searchValue &&
                    (load ? (
                        <FontAwesomeIcon className={cx('btn-load')} icon={faSpinner}></FontAwesomeIcon>
                    ) : (
                        <button to="/login" className={cx('btn-clear')} onClick={handleClear}>
                            <Xmark />
                        </button>
                    ))}

                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
