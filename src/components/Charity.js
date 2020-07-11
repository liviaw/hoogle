import React, { Component } from 'react';
import { Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';

export default class Charity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            result: '',
            trigger: false,
        };

        this.triggetNext = this.triggetNext.bind(this);
    }

    componentWillMount() {
        const self = this;
        const { steps } = this.props;
        const search = steps.donation.value;
        let queryUrl = "";
        if (search === 'no') {
            queryUrl = `https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q=covid-19`
            postData(queryUrl)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                if (data["result"]["records"] && data["result"]["records"].length > 0) {
                    self.setState({
                        loading: false, result: data["result"]["records"]
                    });
                } else {
                    self.setState({ loading: false, result: 'Not found.' });
                }
            });
        } else if (search === 'yes') {
            this.props.triggerNextStep({ value: "", trigger:'charity-search2' })
        } else {
            queryUrl = `https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q=` + search;
            postData(queryUrl)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                if (data["result"]["records"] && data["result"]["records"].length > 0) {
                    self.setState({
                        loading: false, result: data["result"]["records"]
                    });
                } else {
                    self.setState({ loading: false, result: 'Not found.' });
                }
            });
        }

        // Example POST method implementation:
        async function postData(url = '') {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
    }

    triggetNext() {
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep();
        });
    }
    displayCharities(list) {
        if (list.length > 5) {
            list = list.slice(0, 5);
        }
        return (<div>
            These are the top recommended charities for you:
            {list.map(charity => (
                <div key={charity["_id"]} onClick={() => this.props.triggerNextStep({ value: charity["Charity_Legal_Name"], trigger:'charity-prompt' })}>
                    <div><b>{charity["Charity_Legal_Name"]} -></b></div>
                    <div>{charity["Charity_Website"]}</div>
                </div>
            ))}
        </div>
        )
    };



    render() {
        const { trigger, loading, result } = this.state;

        return (
            <div className="charity">
                {loading ? <Loading /> : this.displayCharities(result)}
                {
                    !loading &&
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                        }}
                    >
                        {
                            !trigger &&
                            <button
                                onClick={() => this.triggetNext()}
                            >
                                Search Again
              </button>
                        }
                    </div>
                }
            </div>
        );
    }
}

Charity.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};

Charity.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
};