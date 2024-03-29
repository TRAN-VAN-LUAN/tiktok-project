import classNames from 'classnames/bind';
import styles from './propper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('warrper', className)}>{children}</div>;
}

export default Wrapper;
