import { useCreateProject } from "../../../../gateways/resource-api/projects/projects";
import { CreateProjectDTO } from "../../../../gateways/resource-api/types";
import { tKeys } from "../../../../i18n/keys";
import useToast from "../../progress-validation/toast";
import { ToastType } from "../../progress-validation/toast/types";
import { useTranslation } from 'react-i18next';

const usePageLogic = () => {
    // Attributes
    const toast = useToast()
    const { t } = useTranslation()
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    async function handleOnCreateProject(value: CreateProjectDTO) {
        try {
            await createProject(
                {
                    data: value,
                    organisationId: '539419f3-1b1e-4926-895b-92a8879aec5e',
                },
                {
                    onSuccess: async () => {
                        // resetForm();
                    },
                    onError: async () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t(
                                tKeys.home.modal.create_project.form
                                    .project_name.form.error,
                            ),
                            delay: 5000,
                        });
                    },
                },
            );
        } catch (e) { }
    }
}