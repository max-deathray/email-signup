import React, { Component } from 'react';

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      first: '',
      last: '',
      stage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.stage === 2) {
      console.log(this.state);
    }
    this.setState({
      stage: this.state.stage + 1,
    });
  }

  render() {
    return (
      <div className="footer">
        <form id="footer-form" onSubmit={this.handleSubmit}>
          {this.state.stage === 1 && (
            <div>
              <h4 className="signup">Sign up for the TLC newsletter.</h4>
            </div>
          )}
          {this.state.stage === 2 && (
            <div>
              <h4 className="signup">
                Almost done! Please enter your first and last name.
              </h4>
            </div>
          )}
          {this.state.stage === 3 && (
            <div className="thank-you">
              <h4>Thank You for Signing Up! </h4>
              <p>Look out for the latest news on your favorite shows.</p>
            </div>
          )}

          <div>
            {this.state.stage === 1 && (
              <React.Fragment>
                <label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="enter email address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <button className="next-btn">next</button>
              </React.Fragment>
            )}
          </div>
          <div>
            {this.state.stage === 2 && (
              <label id="names-holder">
                <div id="names">
                  <input
                    required
                    type="text"
                    name="first"
                    placeholder="First Name"
                    value={this.state.first}
                    onChange={this.handleChange}
                  />
                  <input
                    required
                    type="text"
                    name="last"
                    placeholder="Last Name"
                    value={this.state.last}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="next-btn">sign up</button>
              </label>
            )}
          </div>
          {this.state.stage === 1 && (
            <div id="fineprint">
              <input type="checkbox" id="checkbox" required />
              <label id="privacy">
                I agree to receive information from Discovery Communications in
                accordance with the following{' '}
                <a href="https://en.wikipedia.org/wiki/Privacy_policy">
                  Privay Policy
                </a>
                .
              </label>
            </div>
          )}
        </form>
      </div>
    );
  }
}
