import { Button, CircularProgress, TextField, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";
import { storage } from "./firebase";
import "./Home.css";
function Home() {
  const [topic, setTopic] = React.useState('C/C++');
  const [subtopic, setSubTopic] = useState("");
  const [desc, setDesc] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const history = useHistory();
  const [user, setUser] = useState("");


  const topics = [
    {
      value: 'c',
      label: 'C/C++',
    },
    {
      value: 'java',
      label: 'JAVA',
    },
    {
      value: 'python',
      label: 'Python',
    },
    {
      value: 'array',
      label: 'Array',
    },
    {
      value: 'string',
      label: 'String',
    },
    {
      value: 'stack',
      label: 'Stack',
    },
    {
      value: 'queue',
      label: 'Queue',
    },
    {
      value: 'linkedlist',
      label: 'Linked List',
    },
    {
      value: 'tree',
      label: 'Trees',
    },
    {
      value: 'bst',
      label: 'BST',
    },
    {
      value: 'graphs',
      label: 'Graphs',
    },
    {
      value: 'hashing',
      label: 'Hashing',
    },
    {
      value: 'analysis',
      label: 'Analysis of Algorithm',
    },
    {
      value: 'searching',
      label: 'Searching',
    },
    {
      value: 'sorting',
      label: 'Sorting',
    },
    {
      value: 'greedy',
      label: 'Greedy Algorithm',
    },
    {
      value: 'dynamic',
      label: 'Dynamic Programming',
    },
    {
      value: 'backtracking',
      label: 'Backtracking ',
    },
    {
      value: 'branchandbound',
      label: 'Branch and Bound ',
    },
    {
      value: 'graphalgo',
      label: 'Graph Algorithm',
    },
    {
      value: 'dld',
      label: 'Digital and Logic Design',
    },
    {
      value: 'dbms',
      label: 'Data Base Management System',
    },
    {
      value: 'os',
      label: 'Opertaing Systems',
    },
    {
      value: 'net',
      label: 'Networking',
    },
    {
      value: 'oops',
      label: 'Object Oriented Programming in JAVA',
    },
    {
      value: 'se',
      label: 'Software Engineering',
    },
    {
      value: 'pl',
      label: 'Profit and Loss',
    },
    {
      value: 'percent',
      label: 'Percentage',
    },
    {
      value: 'numbers',
      label: 'Numbers',
    },
    {
      value: 'bs',
      label: 'Boats and Streams',
    },
    {
      value: 'td',
      label: 'Time and Distance',
    },
    {
      value: 'tw',
      label: 'Time and Work',
    },
    {
      value: 'pa',
      label: 'Problems on Ages',
    },
    {
      value: 'pc',
      label: 'Parmutation and Combination',
    },
    {
      value: 'rp',
      label: 'Ratio & Proportion',
    },
    {
      value: 'cp',
      label: 'Pipe and Cistern',
    },
    {
      value: 'am',
      label: 'Aligation and Mixtures',
    },
    {
      value: 'ns',
      label: 'Nuber Series',
    },
    {
      value: 'an',
      label: 'Analogies',
    },
    {
      value: 'sm',
      label: 'Statement and Assumtion',
    },
    {
      value: 'br',
      label: 'Blood Relation',
    },
    {
      value: 'ls',
      label: 'Letter and Series',
    },
    {
      value: 'sg',
      label: 'Syllogism',
    },
    {
      value: 'sa',
      label: 'Sitting Arrangements',
    },
    {
      value: 'dt',
      label: 'Direction Test',
    },
    {
      value: 'web',
      label: 'Web Development',
    },
    {
      value: 'md',
      label: 'Mobile Development',
    },
    {
      value: 'it',
      label: 'IOT',
    },
    {
      value: 'ml',
      label: 'Machine Learning',
    },
    {
      value: 'cs',
      label: 'Cyber Sequrity',
    },
    {
      value: 'cc',
      label: 'Cloud Computing',
    },
    {
      value: 'eh',
      label: 'Ethical Hacking',
    },
    {
      value: 'emg',
      label: 'Engineering Mathematics GATE'
    },
    {
      value: 'dlg',
      label: 'DLD GATE'
    },
    {
      value: 'coag',
      label: 'COA GATE'
    },
    {
      value: 'pdg',
      label: 'P & DS GATE'
    },
    {
      value: 'alg',
      label: 'Algorithm Gate'
    },
    {
      value: 'tocg',
      label: 'TOC GATE'
    },
    {
      value: 'cdg',
      label: 'Compiler GATE'
    },
    {
      value: 'osg',
      label: 'OS GATE'
    },
    {
      value: 'dbg',
      label: 'DB GATE'
    },
    {
      value: 'cng',
      label: 'Network GATE'
    },
   
  ];

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  useEffect(() => {
    if (!localStorage.getItem('uid')) {
      history.push('/')
    }
  }, [])

  useEffect(async () => {
    if (localStorage.getItem('uid')) {
      const URL = 'https://kernelbackend.herokuapp.com/api/admin/auth/account/' + localStorage.getItem('uid');
      const resp = await fetch(URL);
      const respData = await resp.json();
      setUser(respData);
    }
    else{
      alert("Try Logging in again");
    }
  }, [topic])
  const BASEURL = 'https://kernelbackend.herokuapp.com/api/'
  //const BASEURL = 'http://localhost:5000/api/'
  async function postVID(topic, username) {
    if(topic!="" && subtopic!="" && desc!="" && videoUrl!=""){
      setWait(true);
      const videoData = {
        topic: topic,
        subtopic: subtopic,
        desc: desc,
        videoUrl: videoUrl,
        uid: localStorage.getItem('uid'),
        username: username
      }
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(videoData)
      }
      const resp = await fetch(BASEURL + `videos/${topic}`, options);
      const respData = await resp.json();
      alert(respData.message)
  
      if (respData) {
        setWait(false);
      }
  
      setDesc("");
      setTopic("C/C++");
      setSubTopic("");
      setUser("");
      setVideoUrl("")
    }
    else{
      alert("One or More field is empty");
    }
  }

  const submit = async () => {

    if (topic === 'c') {
      postVID("c",user?.username)
    }
    if (topic === "java") {
      postVID("java",user?.username)
    }
    if (topic === 'python') {
      postVID("python",user?.username)
    }
    if (topic === "array") {
      postVID("array",user?.username)
    }
    if (topic === "string") {
      postVID("string",user?.username)
    }
    if (topic === "stack") {
      postVID("stack",user?.username)
    }
    if (topic === "queue") {
      postVID("queue",user?.username)
    }
    if (topic === "linkedlist") {
      postVID("linked",user?.username)
    }
    if (topic === "tree") {
      postVID("tree",user?.username)
    }
    if (topic === "bst") {
      postVID("bst",user?.username)
    }
    if (topic === "graphs") {
      postVID("graphs",user?.username)
    }
    if (topic === "hashing") {
      postVID("hashing",user?.username)
    }
    if (topic === "analysis") {
      postVID("analysis",user?.username)
    }
    if (topic === "searching") {
      postVID("searching",user?.username)
    }
    if (topic === "sorting") {
      postVID("sorting",user?.username)
    }
    if (topic === "greedy") {
      postVID("greedy",user?.username)
    }
    if (topic === "dynamic") {
      postVID("dynamic",user?.username)
    }
    if (topic === "backtracking") {
      postVID("backtracking",user?.username)
    }
    if (topic === "branchandbound") {
      postVID("branchandbound",user?.username)
    }
    if (topic === "graphalgo") {
      postVID("graphalgo",user?.username)
    }
    if (topic === "dld") {
      postVID("dld",user?.username)
    }
    if (topic === "dbms") {
      postVID("dbms",user?.username)
    }
    if (topic === "os") {
      postVID("os",user?.username)
    }
    if (topic === "net") {
      postVID("net",user?.username)
    }
    if (topic === "oops") {
      postVID("oops",user?.username)
    }
    if (topic === "se") {
      postVID("se",user?.username)
    }
    if (topic === "pl") {
      postVID("pl",user?.username)
    }
    if (topic === "percent") {
      postVID("percent",user?.username)
    }
    if (topic === "numbers") {
      postVID("numbers",user?.username)
    }
    if (topic === "bs") {
      postVID("bs",user?.username)
    }
    if (topic === "td") {
      postVID("td",user?.username)
    }
    if (topic === "tw") {
      postVID("tw",user?.username)
    }
    if (topic === "pa") {
      postVID("pa",user?.username)
    }
    if (topic === "pc") {
      postVID("pc",user?.username)
    }
    if (topic === "rp") {
      postVID("rp",user?.username)
    }
    if (topic === "cp") {
      postVID("cp",user?.username)
    }
    if (topic === "am") {
      postVID("am",user?.username)
    }
    if (topic === "ns") {
      postVID("ns",user?.username)
    }
    if (topic === "an") {
      postVID("an",user?.username)
    }
    if (topic === "sm") {
      postVID("sm",user?.username)
      console.log(topic)
    }
    if (topic === "br") {
      postVID("br",user?.username)
     console.log(topic)
    }
    if (topic === "web") {
      postVID("web",user?.username)
    }
  }


  const [wait, setWait] = useState(false);
  return (
    <div className="home">
      <div className="home_top">
        <Header />
      </div>
      <div className="home_bottom">
        <div className="home_form">
          <h1>Videos</h1>
          <TextField
            select
            label="Topic"
            value={topic}
            onChange={handleTopicChange}
          >
            {topics.map((option) => (
              <MenuItem key={option?.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <input
            type="text"
            placeholder="Sub Topic Name"
            value={subtopic}
            onChange={(e) => setSubTopic(e.target.value)}
          />
          <input
            type="text"
            placeholder="Video Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Video URL"
          />
          <Button className="btn_home" onClick={submit}>
            SUBMIT
          </Button>
        </div>
      </div>
      {wait && (
        <>
          <div className="modalbackground">
            <div className="modalContainer">
              <h1>Please Wait...</h1>
              <CircularProgress />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
