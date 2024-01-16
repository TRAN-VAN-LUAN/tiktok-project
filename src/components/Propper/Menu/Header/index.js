import { Wrapper as PropperWrapper } from '~/components/Propper';
import classNames from 'classnames/bind';

import styles from '../Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('menu-transfer')}>
            <button className={cx('icon-wrapper')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon-back')} icon={faChevronLeft} />
            </button>
            <h4> {title} </h4>
        </div>
    );
}

export default Header;
