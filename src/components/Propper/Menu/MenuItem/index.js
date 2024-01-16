import { Wrapper as PropperWrapper } from '~/components/Propper';
import classNames from 'classnames/bind';

import styles from '../Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    const classes = cx('menu-item', {
        separate: item.separate,
    });
    return (
        <Button text black className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    );
}

export default MenuItem;
