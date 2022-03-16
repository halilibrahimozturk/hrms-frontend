import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const options = [
    { key: 'City', text: 'City', value: 'City' },
    { key: 'ankara', text: 'Ankara', value: 'ankara' },
    { key: 'istanbul', text: 'İstanbul', value: 'istanbul' },
]
export default function JobTitles() {
    return (
        <div>
            <Input type='text' placeholder='Search for jobtitle' action>
                <input />
                <Select compact options={options} defaultValue='articles' />
                <Button type='submit'>Find a job...
                


                
                <Icon.Group size>
    <Icon size name='search' />
  </Icon.Group>





                </Button>
            </Input>

        </div>
    )
}
