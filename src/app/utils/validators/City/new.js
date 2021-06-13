import { api } from '@/config/api/api';
import { BadRequest } from '@/app/config/errors';
import yup from '../yupLocale';

export default async (req, res, next) => {
    try {
        const schema = yup.object().shape({
            firstName: yup
                .string()
                .min(3)
                .matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)
                .required('Nome é obrigatório!')
                .test(
                    'city-validation',
                    'city Validator',
                    async function (firstName) {
                        try {
                            await api.get(`/data/2.5/weather`, {
                                params: {
                                    q: firstName,
                                    appid: process.env.APP_ID,
                                },
                            });
                            return true;
                        } catch (error) {
                            throw new BadRequest(error);
                        }
                    }
                ),
        });
        await schema.validate(req.body, { abortEarly: false });
        return next();
    } catch (error) {
        return res
            .status(400)
            .json({ error: 'Validation fails.', messages: error.inner });
    }
};
