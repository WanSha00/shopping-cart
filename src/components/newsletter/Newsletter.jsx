import "./Newsletter.css";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = () => {
    if (email != null) {
      setSubmit(true);
    }
  };

  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers In Your Email</h1>
        {!submit && <p>Subscribe to our newsletter and stay updated</p>}
        {submit && <p>Stay tuned for awesome updates!</p>}
        {!submit && (
          <div>
            <input
              onChange={(e) => handleEmail(e)}
              type="email"
              placeholder="Your email here"
            />
            <button onClick={() => submitEmail()}>Subscribe</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Newsletter;
