const OnScriptsItems = () => {
    const topBanner = document.querySelector('.top-banner');
    const navbarItems = document.querySelector('.navbar');
    const footerItems = document.querySelector('.footer');
    const signUpNow = document.querySelector('.cta-section');
    const relatedBlogs = document.querySelector('.related-blogs');

    topBanner.innerHTML = `
          <div class="body-small">
          Let&#x27;s join other business and professionals to grow your Brand. Click <a href="/contact.html" class="small-body">here</a> to get started!
        </div>
        <a
          data-w-id="2821e135-7aa8-6b95-31e7-9619bcd3136a"
          href="#"
          class="top-banner-close w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/632a9b1fe4ce437c56019876_ic-close.svg"
            loading="lazy"
            alt="Close Icon"
            class="img-block"
        />
        </a>
        `

    navbarItems.innerHTML = `
    <a href="/" aria-current="page" class="brand w-nav-brand w--current"
    ><img
      src="/icons/brand_logo.png"
      alt="Scelland Technologies"
  /></a>
  <nav role="navigation" class="nav-menu w-nav-menu">
    <a
      href="/"
      aria-current="page"
      class="nav-link w-nav-link w--current"
      >Home</a
    ><a href="/about.html" class="nav-link w-nav-link">About</a
    ><a href="/services.html" class="nav-link w-nav-link">Services</a
    ><a href="team.html" class="nav-link w-nav-link">Team</a
    ><a href="/blog.html" class="nav-link w-nav-link">Blog</a>
    <div class="header-button">
      <a href="contact.html" class="outline-button nav-button w-button"
        >Contact</a
      >
    </div>
  </nav>
  <div class="menu-button w-nav-button">
    <div class="top-line"></div>
    <div class="middle-line"></div>
    <div class="bottom-line"></div>
  </div>
    `;

    footerItems.innerHTML = `
    <div class="container w-container">
    <div class="footer-top">
      <div class="ft-left">
        <a href="/" aria-current="page" class="w-inline-block w--current"
          ><img
            src="/icons/brand_logo_footer.png"
            loading="lazy"
            alt="Ecolabs"
        /></a>
        <div class="footer-menu">
          <a
            href="/"
            aria-current="page"
            class="footer-link f-first-link w--current"
            >Home</a
          ><a href="/about.html" class="footer-link">About</a
          ><a href="/services.html" class="footer-link">Services</a
          ><a href="team.html" class="footer-link">Team</a
          ><a href="/blog.html" class="footer-link">Blog</a
          ><a href="/careers.html" class="footer-link">Careers</a
          ><a href="contact.html" class="footer-link">Contact</a>
        </div>
      </div>
      <div class="ft-right">
        <a
          href="https://twitter.com/"
          target="_blank"
          class="social-link w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/6343f888dbb1a122e12f5f4e_twitter.svg"
            loading="lazy"
            alt="Icon" /></a
        ><a
          href="http://facebook.com/"
          target="_blank"
          class="social-link w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/6343f89d8116cd597b52bcb7_facebook.svg"
            loading="lazy"
            alt="Icon" /></a
        ><a
          href="http://youtube.com/"
          target="_blank"
          class="social-link w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/6343f8ab8d435cab6978946d_youtube.svg"
            loading="lazy"
            alt="Icon" /></a
        ><a
          href="http://instagram.com/"
          target="_blank"
          class="social-link w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/6343f8b5feeda34757e88104_instagram.svg"
            loading="lazy"
            alt="Icon" /></a
        ><a
          href="http://linkedin.com/"
          target="_blank"
          class="social-link w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/63201b51f3e2d01beecbb8b7/6343f8c2feeda3b5c9e89cc7_linkedin.svg"
            loading="lazy"
            alt="Icon"
        /></a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="fb-left">
        <div class="copyright-text">
          Designed by
          <a href="https://www.anchormiles.com/" target="_blank" class="copyright-link"
            >AnchorMiles</a
          >. Powered by
          <span
            class="copyright-link"
            >Vercel | Webflow</span
          >.
        </div>
      </div>
      <div class="fb-right">
        <div class="fb-link">
          <span class="footer-link f-first-link"
            >&copy; 2024 Scelland | All Rights Reserved</span
          >
        </div>
      </div>
    </div>
  </div>
    `;


    signUpNow.innerHTML = `
    <div class="container w-container">
    <div class="cta-wrap">
      <h2>Still thinking about it?</h2>
      <div class="body-small sub-heading">
        Sign up for our newsletter and get insights for your brand &amp; business
      </div>
      <div class="cta-newsletter">
        <div class="w-form">
          <form
            id="wf-form-CTA-Form"
            name="wf-form-CTA-Form"
            data-name="CTA Form"
            method="get"
            class="cta-form"
          >
            <input
              type="email"
              class="cta-input w-input"
              maxlength="256"
              name="User-Email"
              data-name="User Email"
              placeholder="Enter your email here"
              id="user-email"
              required=""
            /><input
              type="submit"
              value="Sign up Now"
              data-wait="Please wait..."
              class="secondary-button cta-button w-button"
            />
          </form>
          <div class="success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="error-message w-form-fail">
            <div>
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    relatedBlogs.innerHTML = ``;


}
OnScriptsItems();