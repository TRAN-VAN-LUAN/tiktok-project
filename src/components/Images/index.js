import { forwardRef } from 'react';
import { useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, fallBack: currentFallBack = images.image, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(currentFallBack);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError}></img>;
}

export default forwardRef(Image);
