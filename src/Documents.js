import React from 'react'
import { Button, CircularProgress, TextField, MenuItem } from "@material-ui/core";
import Header from "./components/Header";
import { useState } from "react";
import "./Document.css";

function Documents() {
  const [topic, setTopic] = React.useState('C/C++');
  console.log(topic);

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
    value: 'trees',
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
    value: 'graph',
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
    label: 'Pipes and Cisterns',
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
    value: 'wd',
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
 
];
    return (
        <div className ="document">
            <div className="document_top">
      <Header/>
      </div>
      <div className="document_bottom">
      <div className="document_form">
        <h3>DOCUMENT'S   INFORMATION</h3>
        <TextField
          select
          label="Topic"
        >
          {topics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <input
          type="text"
          placeholder="Sub Topic Name"
        />
        <input
          type="text"
          placeholder="Document Description"
        />
        <input
          type="file"
          placeholder="Choose File"
        />
        <Button className="btn_home">
          SUBMIT
        </Button>
      </div>
      </div>
        </div>
    )
}

export default Documents
