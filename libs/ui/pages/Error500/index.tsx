import React from 'react';
import Text from '../../components/contents/text/index';
import FONTS from 'ui/constants/fonts';
import COLORS from 'ui/constants/colors';
const Error500 = () => {
    return (
        <Text
            font={FONTS.T1.T44px.Bold700.value}
            color={COLORS.Error.T500.value}
        >
            SERVER SIDE ERROR - SOMETHING WENT WRONG
        </Text>
    );
};

export default Error500;
