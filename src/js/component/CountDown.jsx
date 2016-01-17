import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import moment                           from 'moment';

export default class CountDown extends Component {

    static defaultProps = {
        bigDay : moment().add(30, "day"),
    }

    constructor( props ) {
        super( props );

        var date = moment().format('YYYY MM DD, h:mm:ss A');
        var bigDay = moment(props.bigDay, "YYYY MM DD");
        var duration = moment.duration(bigDay.diff(date));

        this.state = {date: date, bigDay: bigDay, duration: duration};
    }

    updateTime() {
        var newDate = moment().format('MMMM Do YYYY, h:mm:ss A');
        var diff = this.state.bigDay.diff(moment());
        var duration = moment.duration(diff);

        this.setState({date: newDate, duration: duration});
    }

    componentDidMount() {
        this.updateTime();
        setInterval(::this.updateTime, 1000);
    }

    componentWillUnmount() {
    }

    render() {
        var lengths = ['months', 'weeks', 'days'];
        var duration = this.state.duration;
        var periods = lengths.map(function(time) {
            return duration.as(time);
        });
        var diff = {
            'hours': duration.hours(),
            'minutes': duration.minutes(),
            'seconds': duration.seconds(),
            'human': duration.humanize()
        };

        periods.forEach(function(element, index, array) {
          diff[lengths[index]] = Math.floor(element);
        });
        
        return (
            <div className="countdown">
                <h2 className="timer">
                    <span>  
                        {diff.hours | 0} 
                    </span> Hours 
                    <span>
                        {diff.minutes | 0}  
                    </span> Minutes 
                    <span> 
                        {diff.seconds | 0} 
                    </span> Seconds 
                </h2>
            </div>
        );
    }
}

// <h2 className="statement">
//     <span className="duration">
//         {diff.human}
//     </span>
// </h2>
// <h3 className="breakdown">
//     <span>  
//         {diff.months | 0} 
//     </span> Months  
//     <span>
//         {diff.weeks | 0} 
//     </span> Weeks  
//     <span>
//         {diff.days | 0} 
//     </span> Days 
// </h3>