import React from 'react'
import { Grid, Segment , Button } from 'semantic-ui-react'

export default function FastSearch() {
    return (
        <div>
            

            <Grid columns='equal' divided inverted padded>
    <Grid.Row color='blue' textAlign='center'>
      <Grid.Column>
        <Segment color='blue' inverted>
        <Button primary>RELEASED TODAY</Button>

          
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='blue' inverted>
        <Button primary>PART-TIME JOBS</Button>

          
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='blue' inverted>
        <Button primary>INTERNSHIPS</Button>

          
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>

            



        </div>
    )
}
