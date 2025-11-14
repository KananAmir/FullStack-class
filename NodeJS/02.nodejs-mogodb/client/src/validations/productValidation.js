import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
    name: Yup.string()
        .min(10, 'Name is too short!')
        .max(50, 'Too Long!')
        .required('Name is required'),
    description: Yup.string()
        .min(10, 'Description is too short!')
        .max(50, 'Too Long!')
        .required('Description is required'),
    price: Yup.number().required('Price is required'),
    category: Yup.string()
        .min(10, 'Category is too short!')
        .max(50, 'Too Long!')
        .required('Category is required'),
    image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
});
