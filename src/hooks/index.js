import {useState, useEffect } from 'react';
import { firebase } from '../firebase';
import {collatedTasksExist} from '../helpers'
import moment from 'moment'



export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    let userId = kD7oLLbMDjzfaJur0yEK;
    useEffect(() => {
        let unsubscribe = firebase
                            .firestore()
                            .collection('tasks')
                            .where('userId', '==', userId)
        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? 
        (unsubscribe = unsubscribe.where("projectId", '==', selectedProject)) :
        selectedProject === 'TODAY' ?
        (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')
        ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;


        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }))
        });

        setTasks(
            selectedProject === "NEXT_7_DAY" ? newTasks.filter(
                task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 
                && task.archived !== true
            )
            : newTasks.filter(task => task.archived !== true)
        )

    }, [selectedProject]);
}
