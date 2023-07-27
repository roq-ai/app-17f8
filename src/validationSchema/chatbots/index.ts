import * as yup from 'yup';

export const chatbotValidationSchema = yup.object().shape({
  name: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
