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
    }, [selectedProject]);


}
