// form  for send link to email for reset password
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default ResetPassword

function ResetPassword() {

    const router = useRouter();

    const validationSchema = Yup.object().shape({
        new_password: Yup.string()
            .required('New Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                "Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
            )
            .min(6, 'New Password must be at least 6 characters'),
        confirm_password: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('new_password'), null], 'Confirm Password must match New Password')

    });


    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ new_password, confirm_password }) {
        return userService.resetPassword({ token: router.query.token, new_password, confirm_password })
            .then(() => {
                alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className="card-body">
                <h4 className="card-title">Reset Password</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>New Password</label>
                        <input name="new_password" type="password" {...register('new_password')} className={`form-control ${errors.new_password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.new_password?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="confirm_password" type="password" {...register('confirm_password')} className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.confirm_password?.message}</div>
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
