import { useCreateOrganisation, useDeleteOrganisation, useGetOrganisation, useGetOrganisationsForUser, useUpdateOrganisation } from '../../../../gateways/resource-api/organisations/organisations';
import { useGetMe } from '../../../../gateways/resource-api/users/users';
import { IDefaultForm, IForm } from '../../../../utils/formik';
import { ICreateOrganisationForm } from '../../../components/sidebar/create-organisation-modal/types';
import { toCreateOrganisationDTO } from '../../../components/sidebar/create-organisation-modal/mappers';
import { ToastType } from 'ui/components/progress-validation/toast/types';
import { tKeys } from '../../../../i18n/keys';
import useToast from 'ui/components/progress-validation/toast';
import { IOrganisationSettingsForm } from '../../components/organisation-settings/types';
import { OrganisationSettingsPageLogicType } from './types';
import { useTranslation } from 'react-i18next';
export const useOrganisationSettingsPageLogic = (): OrganisationSettingsPageLogicType => {
    // Attributes
    const toast = useToast()
    const { t } = useTranslation();
    // Hooks
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
    const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();
    const {
        mutateAsync: updateOrganisation,
        isLoading: isLoadingUpdateOrganisation,
    } = useUpdateOrganisation();
    const { data: userData, refetch: refetchUserData } = useGetMe();
    const {
        data: actualOrganisationUser,
        refetch: refetchActualUserOrganisation,
    } = useGetOrganisation(userData?.organisationId as string);
    const { data: organisationUserData, refetch: refecthOrganisationUserData } =
        useGetOrganisationsForUser(userData?.userId as string);

    // Functions
    async function handleOnDeleteOrganisation() {
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

    async function handleUpdateOrganisation(
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) {
        try {
            await updateOrganisation(
                {
                    organisationId: actualOrganisationUser?.id as string,

                    data: {
                        name: form.organisationName.value,
                        pictureContent:
                            form.organisationPicture &&
                            Buffer.from(
                                form.organisationPicture?.value as ArrayBuffer,
                            ).toString('base64'),
                    },
                },
                {
                    onError: () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t<string>(
                                tKeys.home.organisation_settings.error.save,
                            ),
                            delay: 4000,
                        });
                    },
                    onSuccess: () => {
                        toast({
                            type: ToastType.SUCCESS,
                            title: t<string>(
                                tKeys.home.organisation_settings.success.save,
                            ),
                            delay: 3000,
                        });
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                    },
                },
            );
        } catch (e) {
            toast({
                type: ToastType.ERROR,
                title: t<string>(tKeys.home.organisation_settings.error.save),
                delay: 4000,
            });
        }
    }

    return { handleUpdateOrganisation, handleOnDeleteOrganisation, actualOrganisationUser, isLoadingUpdateOrganisation }
}
