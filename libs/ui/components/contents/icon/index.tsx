import Icons from './icons';
import IconProps from './props';

const Icon = (props: IconProps): JSX.Element => {
    // Attributes
    const { name, ...rest } = props;
    // Render
    return Icons[props.name](rest);
};

export default Icon;
