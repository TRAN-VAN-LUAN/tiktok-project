import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
    faXmark,
    faClock,
    faPlus,
    faEllipsisVertical,
    faLightbulb,
    faEarthAsia,
    faKeyboard,
    faQuestionCircle,
    faUser,
    faGear,
    faVideo,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PropperWrapper } from '~/components/Propper';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Propper';
import { faBookmark, faGrinTears, faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=portrait&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'English',
            code: 'vi',
            data: [
                {
                    title: 'Englih',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'Thái Lan',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Phản hồi và trợ giúp',
        to: '/help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
        to: '/keyboard',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/viewfile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu thích',
        to: '/like',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/livestudio',
    },
    ...items,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState(['hello ae']);

    const currentUser = true;

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
                <TippyHeadless
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
                                            <Button
                                                text
                                                list
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
                </TippyHeadless>

                <div className={cx('action')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} className={cx('icon-menu')}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} className={cx('icon-menu')}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}

                    <Menu items={currentUser ? USER_MENU : items}>
                        {currentUser ? (
                            <img
                                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/353634305_934136067853909_6507192114935806820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFUfs_OyZ1oyb44FbXz19yy6DskU8zMKQToOyRTzMwpBAqQFkCotz7ocfnCyx_myhePgiWqznASF2uRsMy3RhQI&_nc_ohc=RHKPYlT308sAX_avSsv&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDEdwb2QvuV1dlqgooskN69thSZzGvxoV0gUolE2xBBlA&oe=65AAFFCC"
                                className={cx('action-avata')}
                                alt="Nguyen Văn A"
                            />
                        ) : (
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className={cx('icon-menu')}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
