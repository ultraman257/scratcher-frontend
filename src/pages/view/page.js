import React from 'react';
import { Header } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { LoadImg } from '../../components';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const View = () => {
	
	const params = useParams()
	const ref = useRef();
	const [page, setPage] = useState(1);
	const [currentTasks, setCurrentTasks] = useState([]);
	const [parentTasks, setParentTasks] = useState([]);
	
	useEffect(() => {
		
		axios.get(`http://localhost:4000/task/${params.id}`, {}).then(result => {
			setCurrentTasks(result.data.tasks);
			setParentTasks(result.data.parentTasks);
		})
	}, [params])
	
	const handleUpdate = () => {
	
	
	}

	useEffect(() => {
		
		console.log(page);
		
	}, [page])
	
	const loadMore = () => {
		
		let pageCopy = page;
		pageCopy++;
		setPage(pageCopy)
		
		axios.get(`http://localhost:4000/task/${params.id}?page=${page}`, {}).then(result => {
			setParentTasks(prevState => {
				return [...prevState, ...result.data.parentTasks ];
			});
		})
		
	};
	
	// useEffect(() => {
	//
	//
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	//
	// }, [])
	
	return (
		<div className={'page-content'} >
			<Header />
			<div className={'container'} ref={ref} >
			<h4>Parent Pages</h4>
			<div className={'current-list'}  >
			{ parentTasks.map((task) => {
				return <div className={'task'} key={task.id}>
					{ task.status === "COMPLETE" ? <LoadImg imageId={task.id} /> : <div className={'placeholder'}><p>Pending</p></div> }
					<div className={'meta'}>
						{/*{ task.id }*/}
						<h4>{task.pageTitle}</h4>
						<p>{task.URL}</p>
						{ task.URL !== task.finalUrl ? <p>Redirected: <em>{ task.finalUrl }</em></p> : null }
						<span className={`status ${task.status.toLowerCase()}`}>{task.status}</span>
						<Link className={'view-button'} to={`/task/view/${task.id}`}>View</Link>
					</div>
				</div>
			})}
				{ parentTasks.length % 20 === 0 ? <button onClick={loadMore}>Load More</button> : null }
			</div>
			</div>
		</div>
	)
	
}

export default View;
