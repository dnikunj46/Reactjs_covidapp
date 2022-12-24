import React from "react";

class Summary extends React.Component {
    render() {
        const { summary, currentDate } = this.props;
        return (
            <>
                <div className="row">
                    <div className="Newconfirmed">
                        <h3>Newconfirmed</h3>
                        <h1>{summary.NewConfirmed}</h1>
                        <h4>{new Date(currentDate).toDateString()}</h4>
                    </div>
                    <div className="TotalConfirmed">
                        <h3>Totalconfirmed</h3>
                        <h1>{summary.TotalConfirmed}</h1>
                        <h4>{new Date(currentDate).toDateString()}</h4>
                    </div>
                    <div className="NewDeasths">
                        <h3>New Deaths</h3>
                        <h1>{summary.NewDeaths}</h1>
                        <h4>{new Date(currentDate).toDateString()}</h4>
                    </div>
                </div>
            </>
        );
    }
}
export default Summary;