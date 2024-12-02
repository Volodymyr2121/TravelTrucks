import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import css from './UserForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  bookingDate: Yup.date().required('Required'),
  comment: Yup.string(),
});

const UserForm = () => {
  const [bookingDate, setBookingDate] = useState(null);

  return (
    <div className={css.formContainer}>
      <h2 className={css.heading}>Book your campervan now</h2>
      <p className={css.subText}>Stay connected! We are always ready to help you.</p>

      <ToastContainer />

      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));

            resetForm();
            setBookingDate(null);

            toast.success('Booking successful!');

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.formField}>
              <Field type="text" name="name" placeholder="Name*" />
              <ErrorMessage name="name" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <Field type="email" name="email" placeholder="Email*" />
              <ErrorMessage name="email" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => {
                  setBookingDate(date);
                  setFieldValue('bookingDate', date);
                }}
                dateFormat="yyyy/MM/dd"
                className={css.customInput}
                calendarClassName={css.customCalendar}
                placeholderText="Booking date*"
              />
              <ErrorMessage name="bookingDate" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formField}>
              <Field as="textarea" name="comment" placeholder="Comment" />
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

