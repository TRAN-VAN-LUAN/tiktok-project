import classNames from 'classnames/bind';

import Header from '~/components/layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
