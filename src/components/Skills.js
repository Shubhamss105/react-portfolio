import React from 'react'
import { Progress } from 'semantic-ui-react'

const Skills = () => (
    <div className='min-h-screen'>
     <div className="m-5">
            <p className='text-orange-400'>SKILLS</p>
            <h2 className='text-5xl'>My Skills <br /> Progress So Far</h2>
          </div>
    <div className='flex '>
  <div className='w-1/2 m-5 p-6'>
  <Progress percent={90} size='tiny'color='purple'>
      HTML
    </Progress>
  <Progress percent={70} size='tiny'color='purple'>
      CSS
    </Progress>
  <Progress percent={60} size='tiny'color='purple'>
      JAVASCRIPT
    </Progress>
  <Progress percent={60} size='tiny'color='purple'>
      MONGODB
    </Progress>
  <Progress percent={80} size='tiny'color='purple'>
      EXPRESSJS
    </Progress>
  <Progress percent={80} size='tiny'color='purple'>
      C/C++
    </Progress>
  <Progress percent={70} size='tiny'color='purple'>
      PYTHON
    </Progress>
  <Progress percent={75} size='tiny'color='purple'>
      SQL
    </Progress>
  
    
  </div>
  <div className='w-1/2 m-5 p-6'>
  <Progress percent={85} size='tiny'color='purple'>
      REACTJS
    </Progress>
  <Progress percent={70} size='tiny'color='purple'>
      NODEJS
    </Progress>
  <Progress percent={90} size='tiny'color='purple'>
      BOOTSTRAP
    </Progress>
  <Progress percent={85} size='tiny'color='purple'>
      TAILWIND CSS
    </Progress>
  <Progress percent={60} size='tiny'color='purple'>
      WEB3JS
    </Progress>
    <Progress percent={50} size='tiny'color='purple'>
      ETHEREUM
    </Progress>
  <Progress percent={70} size='tiny'color='purple'>
      SOLIDITY
    </Progress>
  <Progress percent={65} size='tiny'color='purple'>
      TRUFFLE
    </Progress>
  </div>
  </div>
  </div>
)

export default Skills