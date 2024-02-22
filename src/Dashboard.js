import React from 'react';
import { Card } from 'react-rainbow-components'
import { Input } from 'react-rainbow-components';
import { Link } from 'react-router-dom';
import {  Button } from 'react-rainbow-components';

import "./Dashboard.css"
import Header from './Header';
const Dashboard = () => {
  const inputStyles = {
    width: 100,
    
};
const outStyles={
    width:400,
};
  return (
    <div className='dash'>
      
      <div>
      <Link to="/"><Button type="link" className="logout">X</Button></Link> 

     <Card className='card2 custom-card'>
       <Input
            className="xyz1"
            style={outStyles}
            label="Voltage:"
            placeholder=""
            valueAlignment="center"
            
        />
        
         <Input
            className="xyz1"
            style={outStyles}
            label="Current:"
            placeholder=""
            valueAlignment="center"
            
        />
         <Input
            className="xyz1"
            style={outStyles}
            label="Temparature:"
            placeholder=""
            valueAlignment="center"
            
        />
        <Input
            className="xyz1"
            style={outStyles}
            label="Humidity:"
            placeholder=""
            valueAlignment="center"
            
        />
        

        </Card>
        {/* <div>
        <Card className='card3'>

       <Input
            className="xyz2"
            style={outStyles}
            label="Current-1:"
            placeholder=""
            valueAlignment="center"
            disabled
        />
    
         <Input
            className="xyz2"
            style={outStyles}
            label="Current-2:"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="xyz2"
            style={outStyles}
            label="Current-3:"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="xyz2"
            style={outStyles}
            label="Current-4:"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        

        </Card>
        </div> */}
        </div>
    </div>
  );
};

export default Dashboard;