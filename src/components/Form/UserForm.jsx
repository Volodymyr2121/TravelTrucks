import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css'; 

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  bookingDate: Yup.date().required('Required'),
  comment: Yup.string(),
});

const UserForm = () => {
    return (
    <div className={css.formContainer}>
      <h2 className={css.heading}>Book your campervan now</h2>
      <p className={css.subText}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formField}>
              <label className={css.label} htmlFor="name">
              <Field type="text" name="name" placeholder="Name*" /></label>
              <ErrorMessage name="name" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <label htmlFor="email">
              <Field type="email" name="email" placeholder="Email*" /></label>
              <ErrorMessage name="email" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <label htmlFor="bookingDate">
              <Field type="date" name="bookingDate" placeholder="BookingDate*"/></label>
              <ErrorMessage name="bookingDate" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <label htmlFor="comment">
              <Field as="textarea" name="comment" placeholder="Comment" /></label>
            </div>

            <button type="submit" disabled={isSubmitting} className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;