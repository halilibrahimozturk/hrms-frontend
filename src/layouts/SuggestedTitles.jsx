import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function SuggestedTitles() {
  return (
    <div>
        <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-uzman-profil.png ' />
        <Button icon content='EXPERT' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-yonetici-profil.png' />
        <Button icon content='MANAGER' />

      </Grid.Column>
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-mezun-profili.png' />
        <Button icon content='NEW GRADUATED' />

      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-isci-profil.png' />
        <Button icon content='WORKER' />

      </Grid.Column>
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-hizmet-profil.png' />
        <Button icon content='SERVICE STAFF' />

      </Grid.Column>







      
      <Grid.Column>
        <Image src='https://aday-asset.mncdn.com/img/yeni-engelli-profil.png' />
        <Button icon content='DISABLED PERSON' />

      </Grid.Column>
    </Grid.Row>
  </Grid>
    </div>
  )
}
