import { Button, FormGroup,  Label, Input } from 'reactstrap'; // Form react strap
import { withFormik, Form, Field, Formik, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'
import UserList from './UserList'; 

const login = ( {
    values,
    handleChange,
    errors,
    touched,
    handleSubmit
},

) => (
    <div className="row">
        <h1 className='text-center' >Add Users</h1>
        <div className="col-md-4">
            <Form className="login-form" onSubmit={handleSubmit} >
                <FormGroup className='form-group' >
                    <Label>FirstName</Label>
                    <div>
                        {touched.firstName && errors.firstName && <p className="errors">{errors.firstName}</p>}
                        <Field type="text" placeholder="First Name"  id="firstName" name="firstName" onChange={handleChange} values={values.firstName}></Field>
                    </div>
                </FormGroup>
                <FormGroup className='form-group' >
                    <Label>LastName</Label>
                    <div>
                        {touched.lastName && errors.lastName && <p className="errors">{errors.lastName}</p>}
                        <Field type="text" placeholder="Last Name" id="lastName" name="lastName" onChange={handleChange} values={values.lastName} ></Field>
                    </div>
                </FormGroup>
                <FormGroup className='form-group' >
                    <Label>Email</Label>
                    <div>
                        {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                        <Field type="email" placeholder="Email" id="email" name="email" onChange={handleChange} values={values.email} ></Field>
                    </div>
                </FormGroup>
                <FormGroup className='form-group' >
                    <Label>Note</Label>
                    <div>
                        {touched.note && errors.note && <p className="errors">{errors.note}</p>}
                        <Field type="text" placeholder="note" id="note" name="note" onChange={handleChange} values={values.note} ></Field>
                    </div>
                </FormGroup>

                <Button className="text-blue" type="Submit"  >Add User</Button>
                <p className="errors" > {errors.myErrorFieldName}</p>
            </Form>
        </div>

        <div className="col-md-5">
        {UserList(users)}
        </div>

    </div>

)

const AddUserWithFormik = withFormik({
    mapPropsToValues(){
        return {
            firstName: '',
            lastName:'',
            email: '',
            note: ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('email is not valid').required('Email is required'),
        firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name is required'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name is required'),
        note: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Note is required')
    }),

    handleSubmit(values,{ resetForm }){
         setUsers({id: people.length,firstName:values.firstName,lastName:values.lastName,email:values.email,note:values.note});
         resetForm({
            firstName: '',
            lastName:'',
            email: '',
            note: ''
         });
         console.log(users);
    },

})(login)

export default AddUserWithFormik; 