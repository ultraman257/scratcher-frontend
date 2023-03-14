import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import useIntersection from '../useIntersection';

const LoadImg = ({imageId}) => {
	
	return  <img alt={'Page screenshot'} src={`http://localhost:4000/image/${imageId}`}/>

}

export default LoadImg;
