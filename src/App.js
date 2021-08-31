import React, {Component} from "react";
import {connect} from "react-redux";
import Select from "react-select";
import {fetchGuests} from "./services/actions/guests/fetchGuests";
import {submitRSVP} from "./services/actions/guests/submitRSVP";

class App extends Component {

    state = {
        state:              null,
        city:               null,
        street:             null,
        orientation_number: null,
        descriptive_number: null,
        postal_code:        null,
        accommodation:      null,
        email:              null,
        phone:              null,
        guest_id:           null,
        guests:             []
    }

    componentDidMount() {
        this.props.dispatch(fetchGuests());
        if(this.props.guests) {
            this.setState({
                guests: this.formatOptions(this.props.guests)
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.guests !== this.props.guests) {
            this.setState({
                guests: this.formatOptions(this.props.guests)
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleAccommodation = (e) => {
        this.setState({
            [e.target.id]: e.target.checked
        })
    };

    handleNameChange = (e) => {
        this.setState({
            guest_id: e.id
        });
    };

    formatOptions = (data) => {
        return data.map(x => {
            console.log(x)
            return {
                id: x.id,
                value: x.id,
                label: x.full_name
            }
        });
    }

    handleSubmit = () => {
        console.log("Submit!");
        console.log(this.state)
        //TODO: Submit
        //TODO: Validation of input fields
        //TODO: Response messages
        //TODO: Localization of default CZECH
        //TODO: Load guests to Select and use IDs
        /*this.props.dispatch(
            submitRSVP(
                this.state.guest_id,
                {
                    state: this.state.state,
                    city: this.state.city,
                    street: this.state.street,
                    orientation_number: this.state.orientation_number,
                    descriptive_number: this.state.descriptive_number,
                    postal_code: this.state.postal_code,
                    accommodation: this.state.accommodation,
                    email: this.state.email,
                    phone: this.state.email
                }
            )
        );*/
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="d-none d-md-block col-sm-12 col-md-4">
                        <img src="img/rsvp-flower.png" className="parallax" alt="flower"/>
                    </div>
                    <div className="col-sm-12 col-md-8 align-self-center">
                        <h1 className="title">Účast</h1>
                        <h6 className="text-uppercase font-weight-bold mb-1">
                            Zúčastníš se?
                        </h6>
                        <h6>
                            Prosím vyplň za každou osobu, která je pozvána, zvlášť.<br/>V případě problémů s vyplněním nám zavolejte.
                        </h6>
                        <div id="rsvp-form">
                            <div className="row">
                                <div className="col-md-8 mb-3 m-md-0">
                                    <div className="form-group">
                                        <Select className="form-control"
                                                options={this.state.guests}
                                                id="guest_id"
                                                placeholder="Your name"
                                                onChange={this.handleNameChange}
                                            //TODO: Default value (localization)
                                            //TODO: Fix React i18n localization
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Select className="form-control"
                                                id="accommodation"
                                                placeholder="Will you want an accommodation?"
                                                options={[
                                                    {
                                                        id: 1,
                                                        value: true,
                                                        label: "Yes"
                                                    },
                                                    {
                                                        id: 2,
                                                        value: false,
                                                        label: "No"
                                                    }
                                                ]}
                                                onChange={this.handleNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="inputAddress"
                                            //TODO: Google Address
                                        >
                                            Your address (where should we send the invitation?)
                                        </label>
                                        <input type="text" className="form-control" id="inputAddress" required onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="inputEmail">
                                            Your e-mail (optional)
                                        </label>
                                        <input type="text" className="form-control" id="inputEmail" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label data-localize="rsvp.form.phone" className="control-label" htmlFor="inputPhoneNumber">
                                            Your phone
                                        </label>
                                        <input type="text" className="form-control" id="inputPhoneNumber" required onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-4 align-self-end">
                                    <button data-localize="rsvp.form.button"
                                            className="btn btn-outline-dark rounded-0 px-3 py-1 font-weight-bold"
                                            onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="success-msg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guests: state.fetchGuests.data
    }
}

export default connect(mapStateToProps)(App);
