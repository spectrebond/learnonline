import { Button, MenuItem, TextField, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Header from './components/Header'
import './Document.css'
import { storage } from './firebase';

function Document() {
  const [wait, setWait] = useState(false);

  const [file, setFile] = useState(null);
  const [topic, setTopic] = useState('C/C++');


  const history = useHistory();
  const [user, setUser] = useState("");
  const [progressvalue, setProgress] = useState();

  const [message, setMessage] = useState(null);


  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

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
      value: 'percentage',
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
      label: 'Engineering Mathematics GATE',
    },
    {
      value: 'dlg',
      label: 'DLD GATE',
    },
    {
      value: 'coag',
      label: 'COA GATE',
    },
    {
      value: 'pdg',
      label: 'P & DS GATE',
    },
    {
      value: 'alg',
      label: 'Algorithm Gate',
    },
    {
      value: 'tocg',
      label: 'TOC GATE',
    },
    {
      value: 'cdg',
      label: 'Compiler GATE',
    },
    {
      value: 'osg',
      label: 'OS GATE',
    },
    {
      value: 'dbg',
      label: 'DB GATE',
    },
    {
      value: 'cng',
      label: 'Network GATE',
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
    else {
      alert("Try Logging in again");
    }
  }, [topic])

  const BASEURL = 'https://kernelbackend.herokuapp.com/api/docs'

  const submit = () => {
    setWait(true)
    if (file) {
      const uploadTask = storage.ref(`docs/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage.ref("docs").child(file.name).getDownloadURL()
            .then(async (url) => {
              const docsData = {
                topic: topic,
                docsUrl: url,
                uid: localStorage.getItem('uid'),
                username: user.username
              }

              const options = {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                  'auth-token': localStorage.getItem('token'),
                  'X-uid': localStorage.getItem('uid')
                },
                body: JSON.stringify(docsData)
              }

              const resp = await fetch(BASEURL, options);
              const respData = await resp.json();
              alert(respData.message)
              if (respData) {
                setWait(false)

                setProgress();
                setTopic("C/C++");
                setFile(null)
              }

            })
        }
      )
    }
  }

  return (
    <div className="document">
      <div className="document_top">
        <Header />
      </div>
      <div className='document_bottom'>
        <div className='document_form'>
          <h1>Document</h1>
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
        
          <input accept="application/pdf" type="file" placeholder="Choose PDF File" onChange={handleFileChange} />
          <Button className="btn_doc" variant="contained" onClick={submit}>Submit</Button>

        </div>
      </div>

      {wait && (
        <>
          <div className="modalbackground">
            <div className="modalContainer">
              <h1>Please Wait...</h1>
              {
                progressvalue >= 1 ? (<CircularProgress variant='determinate' value={progressvalue} />) : (<CircularProgress />)
              }
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Document

