import { ButtonSize } from '../../../../../libs/ui/components/inputs/button-icon/props';
import ButtonIcon from '../../../../../libs/ui/components/inputs/button-icon';

export default function SignIn() {
    return (
        <div>
            <ButtonIcon
                color='blue'
                size={ButtonSize.LARGE}
                backgroundColor='#5F43E2'
                border='none'
                borderRadius='8px'
                w='200px'
                h='28px'
                icon=<></>
            />
        </div>
    );
}
