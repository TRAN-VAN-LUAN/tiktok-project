import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark, faClock, faPlus, faEllipsisVertical, faSignIn, faLightbulb, faEarthAsia, faKeyboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from '~/components/Propper';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Propper';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Phản hồi và trợ giúp',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState(['hello ae']);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([]);
    //     }, 3000);
    // });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/#" className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </a>
                <Tippy
                    interactive
                    // visible={searchResult.length > 0}
                    // visible
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PropperWrapper>
                                <div className={cx('search-wrapper')}>
                                    <ul className={cx('search-list')}>
                                        <div className={cx('search-name')}>Tìm kiếm gần đây</div>
                                        {searchResult.map((value, index) => (
                                            <Button text list leftIcon={<FontAwesomeIcon icon={faClock} />} rightIcon={<FontAwesomeIcon icon={faXmark} />} key={index}>
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
                        <input placeholder="Tìm kiếm"></input>
                        <button to="/login" className={cx('btn-clear', 'btn')}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn-load', 'btn')}>
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn-search', 'btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>

                    <Button primary>Đăng nhập</Button>

                    <Menu items={items}>
                        <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-menu')}></FontAwesomeIcon>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
