/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import OL from '../../partials/OL/OLTag.jsx';
import UL from '../../partials/UL/ULTag.jsx';
import PTag from '../../partials/P/PTag.jsx';
import H4 from '../../partials/H4/H4Tag.jsx';
import H3 from '../../partials/H3/H3Tag.jsx';
import H2 from '../../partials/H2/H2Tag.jsx';
import Figure from '../../partials/Figure/Figure.jsx';
import Answer from '../../partials/Answer/Answer.jsx';
import classesIA from  "../../../assets/data/IAChatGPT.js";
import classesPython from  "../../../assets/data/Python.js";
import classesFrontend from  "../../../assets/data/FrontEnd.js";
import NavButtons from '../../partials/Navbuttons/NavButtons.jsx';
import Links from '../../partials/Links/Links.jsx';
import Youtube from '../../partials/Youtube/Youtube.jsx';
import Table from '../../partials/Table/Table.jsx';
import Trivia from '../../partials/Trivia/Trivia.jsx';
import ImputCard from '../../partials/InputCard/InputCard.jsx';
import NotFound from '../../partials/NotFound/NotFound.jsx';

function Topics(params) {
  const [classData, setClassData] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState({});
  const [title, setTitle] = useState([]);
  const course = params.match.path.split("/")[2];
  const classID  = parseInt(params.match.params.classId);
  const topicID = parseInt(params.match.params.topicId);
  const H2Title = useRef(null);
  const location = useLocation();
  
  let classes = [];

  if (course.toUpperCase() == "IA") {
    classes = classesIA;
  } 

  if (course.toUpperCase() == "PYTHON") {
    classes = classesPython;
  }

  if (course.toUpperCase() == "FRONTEND") {
    classes = classesFrontend;
  }

  useEffect(() => {
    let newData = classes.filter(item => item.class === classID);
    (newData.length === 0) ?
      setClassData([]) :
      setClassData(newData[0].classData);

      let pageData = {
        class: classID, 
        topic: topicID,
        course: course,
        topics: newData[0].topics,
        classes: classes.length,
        lastClassLastTopic: classID > 1 ? classes.filter(item => item.class === classID-1)[0].topics : 0,
      };

      setPage(pageData);

      newData.length > 0 ? setTitle(newData[0].title.info) : null;
  
  }, [classID, topicID ]);

  useEffect(() => {
    let newData = classData.filter(item => item.topic == topicID);
    (newData.length === 0) ?
      setData([]) :
      setData(newData[0].topicData);
  }, [classData, topicID]);

  useEffect(() => {
    if (H2Title.current) {
      // Realiza el scroll suave hacia el elemento referenciado
      H2Title.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <article>
      <H2  Data={title} Selector={H2Title} />
      {
        data.length == 0 ? <NotFound /> :
        data.map((item, index) => {
          return(
          item.type === "h2" ? <H2 key={index} Data={item.info} /> :
          item.type === "figure" ? <Figure key={index} Data={item.info} /> :
          item.type === "h3" ? <H3 key={index}  Data={item.info} /> :
          item.type === "h4" ? <H4 key={index} Data={item.info} /> :
          item.type === "p" ? <PTag key={index} Data={item.info} /> :
          item.type === "ul" ? <UL key={index} Data={item.info} /> : 
          item.type === "link" ? <Links key={index} Data={item.info} /> :
          item.type === "answer" ? <Answer key={index} Data={item.info} /> :
          item.type === "youtube" ? <Youtube key={index} Data={item.info} /> :
          item.type === "trivia" ? <Trivia key={index} Data={item.info} Answer={item.answer} /> :
          item.type === "table" ? <Table key={index} Data={item.info} Columns={item.columns} Title={item.title} /> :
          item.type === "inputCard" ? <ImputCard key={index} Data={item.info} /> :
          item.type === "ol" ? <OL key={index} Data={item.info}  /> : null
        )})
      }
      {
        data.length == 0 ? null : 
        <NavButtons Page={page} />
      }
    </article>
  );
}

export default Topics;