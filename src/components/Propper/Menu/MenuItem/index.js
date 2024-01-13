import { Wrapper as PropperWrapper } from '~/components/Propper';
import classNames from 'classnames/bind';

import styles from '../Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
    return (
        <Button text className={cx('menu-item')} leftIcon={item.icon}>
            {item.title}
        </Button>
    );
}

export default MenuItem;
