import React, { Component } from 'react';
import { Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';

export default class CharityInfo extends Component {
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
        console.log(steps);
        const search = steps["3"].value;
        const queryUrl = `https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q=` + search;
        console.log(queryUrl);
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

    triggetNext() {
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep();
        });
    }
    displayCharities(list) {
        return (
                <div key={list[0]["_id"]}>
                    <div><b>{list[0]["Charity_Legal_Name"]}</b></div>
                    <div>{list[0]["Charity_Website"]}</div>
                    {list[0]["Address_Line_1"] ? <div>{list[0]["Address_Line_1"]}</div>: ""}
                    {list[0]["Address_Line_2"] ? <div>{list[0]["Address_Line_2"]}</div>: ""}
                    {list[0]["Address_Line_3"] ? <div>{list[0]["Address_Line_3"]}</div>: ""}
                    {list[0]["Town_City"] ? <div>{list[0]["Town_City"]}, {list[0]["State"]} {list[0]["Postcode"]}</div>: ""}

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

CharityInfo.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};

CharityInfo.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
};