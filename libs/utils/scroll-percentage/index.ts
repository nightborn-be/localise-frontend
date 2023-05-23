import { useRef, useState, useEffect } from 'react';

export default function useScrollPercentage(): [
    React.RefObject<HTMLDivElement>,
    number,
] {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(NaN);

    // This function get the event on param and update the state
    const reportScroll = (e: Event) => {
        setScrollPercentage(getScrollPercentage(e.target as HTMLDivElement));
    };

    useEffect(() => {
        // Take the current node linked with the ref
        const node = scrollRef.current;
        // Check if we have realy a node
        if (node !== null) {
            // Add a event to this node, when we scroll we call the function reportScroll
            node.addEventListener('scroll', reportScroll, { passive: true });
            // Check if my state is allways on NaN that mean we need to setup the good value of scroll with the node
            if (Number.isNaN(scrollPercentage)) {
                setScrollPercentage(getScrollPercentage(node));
            }
        }
        return () => {
            if (node !== null) {
                node.removeEventListener('scroll', reportScroll);
            }
        };
    }, [scrollPercentage]);

    return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

// This function allow you to get the percentage of the scroll
function getScrollPercentage(element: HTMLDivElement | null) {
    if (element === null) {
        return NaN;
    }
    // With the element we take the scroll height to which we withdraw he heigth of the client, that give the scrollable height
    const height = element.scrollHeight - element.clientHeight;
    // We return the percentage of the scroll. scrollTop is the value of the vertically scroll divide by the actual current scrollable height, calculed before
    return Math.round((element.scrollTop / height) * 100);
}
