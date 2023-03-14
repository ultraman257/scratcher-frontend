import React from 'react';
import { Header } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { LoadImg } from '../../components';
import useIntersection from '../../components/useIntersection';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
	
	const ref = useRef();
	const [currentTasks, setCurrentTasks] = useState([]);
	
	useEffect(() => {
		
		axios.get('http://localhost:4000/list', {}).then(result => {
			setCurrentTasks(result.data.tasks);
		})
		
	}, [])
 
	return (
		<div className={'page-content'}>
			<Header />
			<div className={'container'}>
			<h4>Current Tasks</h4>
			<div className={'current-list'}>
			{ currentTasks.map((task) => {
				return <div className={'task'} key={task.id}>
					{ task.status === "COMPLETE" ? <LoadImg ref={ref} imageId={task.id} /> : <div className={'placeholder'}><p>Pending</p></div> }
					<div className={'meta'}>
						{ task.id }
						<h4>{task.pageTitle}</h4>
						<p>{task.URL}</p>
						{ task.URL !== task.finalUrl ? <p>Redirected: <em>{ task.finalUrl }</em></p> : null }
						<span className={`status ${task.status.toLowerCase()}`}>{task.status}</span>
						<Link to={`/task/view/${task.id}`}>View</Link>
					</div>
				</div>
			})}
			</div>
			</div>
		</div>
	)
	
}

export default Index;
