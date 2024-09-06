import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Your Message has been successfully sent.
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();

    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nk3u1ln', 'template_95yscfo', form.current, '8t5Op5K-wjKiOsQRI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="contact-name" required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="contact-email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
								title="Please enter a valid email address." />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" className="form-control" name="contact-phone" required pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
								title="Please enter a valid phone number (e.g., 7966347845)." />
            </div>
            <div className="form-group mb--40">
                <label>How can we help you?</label>
                <textarea className="form-control" name="contact-message" rows="4"></textarea>

            </div>
            <div className="form-group">
                <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Request Assistance</button>
            </div>
            <div className="form-group">
                {result ? <Result /> : null}
            </div>

        </form>
    )
}

export default FormTwo;