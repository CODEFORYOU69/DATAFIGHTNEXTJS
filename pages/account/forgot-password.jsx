// form  for send link to email for reset password
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default ForgotPassword

function ForgotPassword() {

    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is invalid')
    });


    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email }) {
        return userService.forgotPassword(email)
            .then(() => {
                alertService.success('Please check your email for password reset instructions');
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className="card-header">Forgot Password</div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <button disabled={formState.isSubmitting} type="submit" className="btn btn-primary">
                                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Reset Password
                            </button>
                            <Link href="login" className="btn btn-link">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );


}
