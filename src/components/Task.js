/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "../App.css";
import reminder from "../assets/bell.png";
import check from "../assets/check.png";


export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      currentTime: "",
      alarmTime: "", // default empty array
      play: false,
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    this.url = "https://www.youtube.com/watch?v=214pJH6qg8U";
    this.audio = new Audio(this.url);
  }
  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }
  play() {}

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if (this.state.currentTime === this.state.alarmTime) {
        this.setState({
          play: true,
          pause: false,
        });
        console.log(this.audio);
        this.audio.play();
      } else {
        console.log("not yet");
      }
    }
  }
  // addTodo: add a new task inside the state
  addTodo = (event) => {
    event.preventDefault(); // stop default behaviour
    //console.log(event.target.taskTitle.value);
    const data = event.target,
      newTodo = {
        taskName: data.taskName.value,
        description: data.description.value,
        date: data.date.value,
        reminder: data.reminder.value,
      };
    //console.log(newTodo);
    // updating the array but not re-rendering
    this.state.todoList.push(newTodo);
    // updating state and re-render
    this.setState({
      todoList: this.state.todoList,
    });
  };

  deleteTodo = (event) => {
    // splice(indexNumber, howmanyTodelete)
    this.state.todoList.splice(event.target.value, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  doneTodo = (event) => {};

  render() {
    return (
      <>
        <form onSubmit={this.addTodo}>
          <div className="box-task">
            <p>Task name</p>
            <input
              type="text"
              className="box-task-input-task-name"
              required
              name="taskName"
            />
            <p>Description</p>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="box-task-input-description"
            ></textarea>
            <div className="buttons-of-submit-task">
              <div className="due-date">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name="date"
                  required
                />
              </div>
              <div className="reminder">
                {/* <h2>It is {this.state.currentTime}.</h2>
                <h2>{this.alarmMessage}</h2> */}
                <input
                  type="time"
                  name="reminder"
                  onChange={this.setAlarmTime}
                  required
                />
              </div>
              <div className="submit">
                <button type="submit" className="buttons-of-form">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
        <ul>
          {this.state.todoList.map((task, index) => {
            return (
              <div className="minibox-task">
                <h3 className="minibox-task-name">{task.taskName}</h3>
                <p className="minibox-task-description">{task.description}</p>
                
                <div className="time">
                  <div className="minibox-task-date">{task.date}</div>
                  <div className="minibox-task-reminder">
                    <img src={reminder} alt="" />
                    {task.reminder}
                  </div>
                  <div className="minibox-task-donetask">
                    <button
                      onClick={this.deleteTodo}
                      value={index}
                      className="buttons-of-form"
                    >
                     <img src={check} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}
