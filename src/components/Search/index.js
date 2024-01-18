import { useEffect, useState, useRef } from 'react';
import { faMagnifyingGlass, faSpinner, faXmark, faClock } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Xmark } from '../Icons';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [clearResult, setClearResult] = useState('');
    const [showMenu, setShowMenu] = useState(true);

    const searchRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 3000);
    });

    const handleClear = () => {
        searchRef.current.focus();
        setClearResult('');
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
                                {searchResult.map((value, index) => (
                                    <Button
                                        text
                                        list
                                        className={cx('search-item')}
                                        leftIcon={<FontAwesomeIcon icon={faClock} />}
                                        rightIcon={<FontAwesomeIcon icon={faXmark} />}
                                        key={index}
                                    >
                                        {value}
                                    </Button>
                                ))}
                                <div className={cx('search-name')}>Bạn có thể thích</div>
                                {/* list gợi ý yêu thích */}
                            </ul>
                        </div>
                    </PropperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={clearResult}
                    placeholder="Tìm kiếm"
                    onChange={(e) => setClearResult(e.target.value)}
                    onClick={() => setShowMenu(true)}
                ></input>
                {!!clearResult && (
                    <button to="/login" className={cx('btn-clear')} onClick={handleClear}>
                        <Xmark />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('btn-load')} icon={faSpinner}></FontAwesomeIcon> */}
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
