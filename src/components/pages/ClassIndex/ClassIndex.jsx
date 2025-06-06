import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NotFound from '../../partials/NotFound/NotFound';
import classIndexIA from  "../../../assets/data/IAChatGPTIndex"
import classIndexPython from  "../../../assets/data/PythonIndex"
import classIndexFrontend from  "../../../assets/data/FrontendIndex"
import HomeData from '../../partials/HomeData/HomeData';

function ClassIndex(params) {
    const  classId  = parseInt(params.match.params.classId);
    const [data, setData] = useState([]);
    const course = params.match.path.split("/")[2];

    let classIndex= [];

    if (course.toUpperCase() == "IA") {
        classIndex = classIndexIA;
    } 

    if (course.toUpperCase() == "PYTHON") {
        classIndex = classIndexPython;
    }

    if (course.toUpperCase() == "FRONTEND") {
        classIndex = classIndexFrontend;
    }
    
    useEffect(() => {
        if (classId){
        let newData = classIndex.filter(item => item.classId == classId);
        (newData.length === 0) ?
            setData([]) :
            setData(newData);
        } else {
            setData(classIndex);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [classId]);

    return (
        <article>
            {
                !classId ? <HomeData  course={course}/> : null
            }
            {
                classId  ?
                <h2 className='index-title'>Temas de la clase {classId}</h2> : 
                <h2 className='index-title'>Índice de clases</h2>
            }
            
            {
                data && data.length == 0 ? <NotFound  /> :
                data.map((item, index) => (
                    <section key={index}>
                        <h2 className='index-subtitle'>{item.summary}</h2>
                        <ol className='topics-index'>
                            {
                                item.links.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ol>
                    </section>
                ))
            }
        </article>
    )
}

export default ClassIndex;