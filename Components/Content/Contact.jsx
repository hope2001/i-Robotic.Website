import Link from "next/link";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

// import {Link} from "next/link"
function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    // if(data.length>0){
    const body={
      firstName: data.name,
      lastName: data.surname,
      email: data.email,
      object: data.object,
      message: data.message
    }

try {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const Data = await res.json();
  toast(Data.message, { hideProgressBar: false, autoClose: 4000, type: 'success' })
  reset()
  // alert(Data.message);
  
} catch (error) {
  toast(error.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
  
}
}
    return ( 
        // <!-- ======= Contact Section ======= -->
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-header">
          <h2>Contactez Nous</h2>
          <p>Nous serons ravis de vous répondre et de vous proposer des services et solutions unique à vous.</p>
        </div>

      </div>

      <div className="map">
<<<<<<< HEAD
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.554650948296!2d2.3668775387780308!3d6.358138919429662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235687c53b1f23%3A0x5b51c02c96d4e7ac!2sFidjross%C3%A8%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1681727746157!5m2!1sfr!2sbj" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.554650948296!2d2.3668775387780308!3d6.358138919429662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235687c53b1f23%3A0x5b51c02c96d4e7ac!2sFidjross%C3%A8%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1681727746157!5m2!1sfr!2sbj" frameBorder="0" allowFullScreen></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe> */}
=======
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.554650948296!2d2.3668775387780308!3d6.358138919429662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235687c53b1f23%3A0x5b51c02c96d4e7ac!2sFidjross%C3%A8%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1681727746157!5m2!1sfr!2sbj" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.554650948296!2d2.3668775387780308!3d6.358138919429662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235687c53b1f23%3A0x5b51c02c96d4e7ac!2sFidjross%C3%A8%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1681727746157!5m2!1sfr!2sbj" frameborder="0" allowfullscreen></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
>>>>>>> 7f4542562fb86cce6e13fcee5693abbadb17ec5c
      </div>
      {/* <!-- End Google Maps --> */}

      <div className="container">

        <div className="row gy-5 gx-lg-5">

          <div className="col-lg-4">

            <div className="info align-items-center my-auto">
              <h3>I-ROBOTICS Labs</h3>
              <p> Pionnier des solutions de drones.</p>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Adresse:</h4>
                  <p> Fidjrosse, COTONOU Bénin </p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p> <Link className="fw-bold " href="mailto:support@irobotics.store">support@irobotics.store</Link> </p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Tél:</h4>
                  <p> <Link className="fw-bold " href="tel:+22999298181">+(229) 99 29 81 81</Link> </p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

            </div>

          </div>

          <div className="col-lg-8">
            {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form> */}
                            <form onSubmit={handleSubmit(onSubmit)} method="post"  className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" {...register('name', { required: true })} name="name" className="form-control" id="name" placeholder="Nom " required/>
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="text" {...register('surname', { required: true })} name="surname" className="form-control" id="name" placeholder="Prénoms" required/>
                      {errors.surname && <span>This field is required</span>}
                    </div>
                    <div className="col-md-12 form-group mt-3 mt-md-0">
                      <input type="email" {...register('email', { required: true })} className="form-control" name="email" id="email" placeholder="votre adresse mail" required/>
                      {errors.email && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" {...register('object', { required: true })} className="form-control" id="subject" placeholder="En quoi pouvons nous vous aider ?" required/>
                    {errors.object && <span>This field is required</span>}
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" {...register('message', { required: true })} name="message"  placeholder="Message" required></textarea>
                    {errors.message && <span>This field is required</span>}
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Message envoyé avec Success. Merci!</div>
                  </div>
                  <div className="text-center"><button type="submit">Envoyer</button></div>
                </form>
          </div>
          {/* <!-- End Contact Form --> */}

        </div>

      </div>
    </section>
     );
}

export default Contact;