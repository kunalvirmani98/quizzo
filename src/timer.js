import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            _time: {
                mm: 1,
                sec: 0,
            },
            timerOn: true,
        };
        this.interval = null;
    }

    componentDidMount() {
        if (this.state.timerOn) {
            this.interval = setInterval(() => {
                let __time = this.findMinuteAndSeconds(this.state._time);
                // Uncaught Exception
                if (__time != null) {
                    this.setState({ _time: __time, timerOn: true });
                }
            }, 1000);
        }
    }

    componentDidUpdate() {
    }

    findMinuteAndSeconds(_time) {
        let changedTime = _time;
        if (changedTime.mm === 0 && changedTime.sec === 0) {
            clearInterval(this.interval);
            return null;
        }
        if (changedTime.sec === 0) {
            changedTime.sec = 59;
            changedTime.mm = changedTime.mm - 1;
        } else {
            changedTime.sec = changedTime.sec - 1;
        }
        return changedTime;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="bg-secondary-custom text-center px-2 box-shadow-custom">
                <h2>{this.state._time.mm + ":" + this.state._time.sec}</h2>
            </div>
        )
    }
}

export default Timer;