const ContactUs = () => {

  return (
    <article>
      <hgroup>
        <h2>Contact Us Page</h2>
        <h3>Please reach out, we would like to hear from you!</h3>
      </hgroup>
      <form>
        <div class="grid">
          <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
          <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
        </div>
        <div class="grid">
          <button class="outline" type="submit">Subscribe</button>
        </div>
          
        <fieldset>
          <label for="terms">
            <input type="checkbox" role="switch" id="terms" name="terms" />
            I agree to the <a href="#/contactus">Privacy Policy</a>
          </label>
        </fieldset>
      </form>
    </article>
  )
}

export default ContactUs;
