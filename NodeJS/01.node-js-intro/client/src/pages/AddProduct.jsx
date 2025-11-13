import { Formik, Form, Field } from 'formik';
import { ProductSchema } from '../validations/productValidation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

    const nav = useNavigate()
    return (
    <div>
        <h1 className='text-center'>Add Product</h1>
        <Formik
            initialValues={{
                title: '',
                description: '',
                price: '',
                category: '',
                image: ''
            }}
            validationSchema={ProductSchema}
            onSubmit={async(values, { resetForm }) => {
                try {
                    const response = await axios.post('http://localhost:3000/api/products', values);
                    console.log("Product added successfully:", response.data);
                    if(response.status === 201){
                        toast.success("Product added successfully!");
                        resetForm()

                        setTimeout(() => {
                            nav('/')
                        }, 2000);
                    }else{
                        toast.error("Failed to add product.");
                    }
                } catch (error) {
                    toast.error(error.message || "An error occurred while adding the product.");
                    console.error("Error adding product:", error);
                    
                }
            }}
        >
            {({ errors, touched }) => (
                <Form className='flex flex-col gap-4 max-w-md mx-auto'>
                    <Field name="title" className='form-input border p-2' placeholder="Title" />
                    {errors.title && touched.title ? (
                        <div className='text-red-500'>{errors.title}</div>
                    ) : null}
                    <Field name="description" className='form-input border p-2' placeholder="Description" />
                    {errors.description && touched.description ? (
                        <div className='text-red-500'>{errors.description}</div>
                    ) : null}
                    <Field name="price" type="number" className='form-input border p-2' placeholder="Price" />
                    {errors.price && touched.price ? <div className='text-red-500'>{errors.price}</div> : null}
                    <Field name="category" className='form-input border p-2' placeholder="Category" />
                    {errors.category && touched.category ? <div className='text-red-500'>{errors.category}</div> : null}
                    <Field name="image" className='form-input border p-2' placeholder="Image URL" />
                    {errors.image && touched.image ? <div className='text-red-500'>{errors.image}</div> : null}
                    <button type="submit" className='btn btn-primary cursor-pointer border p-2'>Submit</button>
                </Form>
            )}
        </Formik>
        <Toaster />

    </div>
)
};

export default AddProduct