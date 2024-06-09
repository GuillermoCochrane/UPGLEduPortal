import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NotFound from '../../partials/NotFound/NotFound';
import classIndex from  "../../../assets/data/classIndex"

function ClassIndex(params) {
    const  classId  = parseInt(params.match.params.classId);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if (classId){
        let newData = classIndex.filter(item => item.classId == classId);
        (newData.length === 0) ?
            setData([]) :
            setData(newData);
        } else {
            setData(classIndex);
        }
    }, [classId]);

    return (
        <article>
            {
                data && data.length == 0 ? <NotFound /> :
                data.map((item, index) => (
                    <section key={index}>
                        <h2>{item.summary}</h2>
                        <ol>
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