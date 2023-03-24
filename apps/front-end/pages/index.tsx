import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
    // Attributes
    const router = useRouter();

    // Effects
    useEffect(() => {
        if (router.isReady) {
            router.push('/auth');
        }
    }, []);

    // Render
    return <></>;
}
