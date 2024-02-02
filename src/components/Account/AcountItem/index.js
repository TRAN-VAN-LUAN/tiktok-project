import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

import Images from '~/components/Images';
import { Check } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    console.log(data);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('img')} src={data.avatar} alt={data.full_name} />
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <h4>{data.full_name}</h4>
                    <Check />
                </div>
                <p>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
