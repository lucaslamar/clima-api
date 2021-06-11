import yup from '../yupLocale';

export default async (req, res, next) => {
    try {
        const schema = yup.object().shape({
          firstName: yup
                .string()
                .min(3)
                .matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)
                .required('Nome é obrigatório!'),
        });
        await schema.validate(req.body, { abortEarly: false });
        return next();
    } catch (error) {
        return res
            .status(400)
            .json({ error: 'Validation fails.', messages: error.inner });
    }
};
