import * as yup from "yup"


export const BasicFormValidation = yup.object().shape({
 name:yup.string().required("name is required").min(4, 'Name must be at least 4 characters'),
 price:yup.number().positive("price can not be negative number").integer().required("price is required"),
 discountPercentage: yup.number().required('Discount percentage is required').positive('Discount percentage must be a positive number').max(100, 'Discount percentage cannot over 100'),
 imageURL: yup.string().required('Image URL is required'),
 unitsInStock: yup.number().positive("unitsInStock can not be negative number").integer().required("unitsInStock is required"),
 isDiscounted:yup.boolean().oneOf([true],"must be checked").required("required")
});
