import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];
var timer; //타이머 변수 설정

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            notifications: [],
        };
    }
    componentDidMount() {
        const {notifications} =this.state;
        timer=setInterval(()=> { //setInterval() 1초 간격을 타이머
            if(notifications.length < reservedNotifications.length) {
                const index=notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        },1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=> {
                    return 
                    <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} />;
                })}
            </div>
        );
    }
}
export default NotificationList;