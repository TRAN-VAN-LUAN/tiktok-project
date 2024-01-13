import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, list, leftIcon, rightIcon, primary, text, outline, large, active, children, className, disabled, onClick, ...props }) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        large,
        text,
        active,
        disabled,
    });

    const items = {
        onClick,
        ...props,
    };

    // Remove listener

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        items.to = to;
        Comp = 'Link';
    } else if (href) {
        items.href = href;
        Comp = 'a';
    } else if (list) {
        Comp = 'li';
    }

    return (
        <Comp className={classes} {...items}>
            {leftIcon && <span className={cx('icon', 'icon-left')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon', 'icon-right')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
