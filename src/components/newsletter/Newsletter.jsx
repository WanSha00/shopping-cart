import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers In Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
          <input type="email" placeholder="Your email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
