import { HStack, VStack } from '@chakra-ui/react';
import React, { Children, ReactElement } from 'react';
import COLORS from '../../../constants/colors';
import { ITabProps } from './tab/props';
import { ITabsProps } from './props';
import TabTitle from './tab-title';

const Tabs = ({ children, activeKey, onChange }: ITabsProps) => {
    // Render
    function renderTabs() {
        return Children.map(
            children,
            (child: ReactElement<ITabProps> | undefined | false, index) => {
                if (!child) return;
                const key = child.key ?? (index as React.Key);

                return React.createElement(() => {
                    return (
                        <TabTitle
                            key={key}
                            active={`${key}` === `${activeKey ?? ''}`}
                            onSelect={() => onChange?.(key)}
                            title={child.props.title}
                        />
                    );
                });
            },
        );
    }

    function renderPanels() {
        return Children.map(
            children,
            (child: ReactElement<ITabProps> | undefined | false, index) => {
                if (!child) return;

                const key = child.key ?? (index as React.Key);
                const isActive = `${key}` === `${activeKey ?? ''}`;

                if (!isActive) return;

                return child;
            },
        );
    }

    return (
        <VStack
            flex={1}
            flexGrow={1}
            w='full'
            h='full'
            align='flex-start'
            spacing='0'
            overflow='hidden'
        >
            {/* Tab bar */}
            <HStack
                py={'0.6563rem'}
                px={'2rem'}
                direction='row'
                spacing={'1.5rem'}
                align='center'
                w='full'
                h='2.25rem'
                bg={COLORS.Tag.value}
            >
                {renderTabs()}
            </HStack>

            {/* Content */}
            {renderPanels()}
        </VStack>
    );
};

export default Tabs;
