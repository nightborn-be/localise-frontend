import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { Children, ReactElement, ReactNode } from 'react';
import ITabsProps from './props';
import { ITabProps } from './tab/props';

const Tabs = ({ children, activeKey, onChange }: ITabsProps): JSX.Element => {
    // Render
    const renderTabs = (): ReactNode => {
        return Children.map(
            children,
            (child: ReactElement<ITabProps>, index) => {
                if (!child) return;
                const key = index as React.Key;

                return React.cloneElement(child, {
                    key,
                    active: key === activeKey,
                    onSelect: () => onChange?.(key),
                    children: child.props.title,
                });
            },
        );
    };

    const renderPanels = (): ReactNode => {
        return Children.map(
            children,
            (child: ReactElement<ITabProps>, index) => {
                if (!child) return;

                const key = index as React.Key;
                const isActive = key === activeKey;

                if (!isActive) return;

                return <Box key={`panel_${key}`}>{child}</Box>;
            },
        );
    };

    return (
        <Flex direction='column'>
            {/* Tab bar */}
            <Stack
                py={'10.5px'}
                px={'32px'}
                direction='row'
                spacing={'24px'}
                align='center'
                w='100%'
                bg='#F2F4F9'
            >
                {renderTabs()}
            </Stack>

            {/* Content */}
            {renderPanels()}
        </Flex>
    );
};

export default Tabs;
