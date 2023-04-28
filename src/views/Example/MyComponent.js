import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponents";

class MyComponent extends React.Component {


    //key:value
    state = {
        arrJobs: [
            {
                id: "job1",
                title: 'developer',
                salary: '500'
            },
            {
                id: "job2",
                title: 'tester',
                salary: '400'
            },
            {
                id: "job3",
                title: 'Project Manager',
                salary: '1400'
            }
        ],
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        // console.log('check job from parent: ', job)
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;