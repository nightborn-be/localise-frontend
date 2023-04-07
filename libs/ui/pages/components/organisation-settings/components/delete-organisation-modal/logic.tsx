import { useTranslation } from 'react-i18next';
import useToast from '../../../../../components/progress-validation/toast';
import { DeleteOrganisationLogicType } from './types';
import { useGetMe } from '../../../../../../gateways/resource-api/users/users';
import {
    useDeleteOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
} from '../../../../../../gateways/resource-api/organisations/organisations';
import { ToastType } from '../../../../../components/progress-validation/toast/types';
import { tKeys } from '../../../../../../i18n/keys';

export const useDeleteOrganisationLogic = (): DeleteOrganisationLogicType => {
    // Attributes
    const toast = useToast();
    const { t } = useTranslation();
    // Hooks
    const { data: userData, refetch: refetchUserData } = useGetMe();
    const {
        data: actualOrganisationUser,
        refetch: refetchActualUserOrganisation,
    } = useGetOrganisation(userData?.organisationId as string);
    const { refetch: refecthOrganisationUserData } = useGetOrganisationsForUser(
        userData?.userId as string,
    );
    const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();

    async function handleOnSubmit() {
        try {
            await deleteOrganisation(
                {
                    organisationId: actualOrganisationUser?.id as string,
                },
                {
                    onError: () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t<string>(
                                tKeys.home.organisation_settings.error.delete,
                            ),
                            delay: 4000,
                        });
                    },
                    onSuccess: () => {
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                    },
                },
            );
        } catch (e) {
            toast({
                type: ToastType.ERROR,
                title: t<string>(tKeys.home.organisation_settings.error.delete),
                delay: 4000,
            });
        }
    }

    return { handleOnSubmit };
};
