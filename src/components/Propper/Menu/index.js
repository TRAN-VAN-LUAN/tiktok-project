import { Wrapper as PropperWrapper } from '~/components/Propper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    return (
        <Tippy
            interactive
            // visible={searchResult.length > 0}
            // visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-proper')}>
                        {items.map((item, index) => (
                            <MenuItem item={item} key={index}></MenuItem>
                        ))}
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
