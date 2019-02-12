import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      <form>
        <p className="signup">Sign up for the TLC newsletter.</p>
        <label>
          <input
            type="email"
            name="name"
            placeholder="enter email address"
            className="placeholder"
          />
        </label>
        <button type="submit" className="next-btn">
          next
        </button>
        <input
          type="checkbox"
          id="privacyPolicy"
          name="subscribe"
          value="newsletter"
        />
        <label for="privacyPolicy">
          I agree to receive information from Discovery Communications in
          accordance with the following Privay Policy.
        </label>
      </form>
    </div>
  );
};
