import React from 'react';

export const Footer = () => {
  return (
    <form>
      <div className="footer">
        <p className="signup">Sign up for the TLC newsletter.</p>
        <label>
          <input
            type="email"
            name="name"
            placeholder="enter email address"
            className="placeholder"
          />
          <button type="submit" className="next-btn">
            next
          </button>
        </label>
        <div id="checkbox">
          <input
            type="checkbox"
            id="privacyPolicy"
            name="subscribe"
            value="newsletter"
          />
          <label for="privacyPolicy" id="privacy">
            I agree to receive information from Discovery Communications in
            accordance with the following Privay Policy.
          </label>
        </div>
      </div>
    </form>
  );
};
